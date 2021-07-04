import {Request, Response} from "express"
import * as userServices from "../services/db/user_services"
import UserModel from "../models/user_model"
import {hashPassword, comparePassword} from "../services/bcrypt"
import {signToken} from "../services/jwt"
import {User} from "../interfaces/user"

const register = async (req: Request, res: Response) => {
  const {email, password, name} = req.body

  let token: string
  try {
    if (!email || !password || !name)
      throw new Error("Please provide neccessary fields for the registration!")

    const hashedPassword = await hashPassword(password)
    if (!hashedPassword) throw new Error("Internal server error: registering user failed.")

    if (await userServices.getUserByEmail(email))
      throw new Error(`User with the email ${email} exists already`)

    const userDoc = await userServices.saveUser(
      new UserModel({
        email: email,
        password: hashedPassword,
        createdOn: Date.now(),
        name: name
      })
    )

    if (!userDoc) throw new Error("Internal server: Registering user failed")

    token = (await signToken({_id: userDoc._id, email: userDoc.email})) as string

    if (!token) throw new Error("Internal server: Registering user failed")
  } catch (e: any) {
    return res.status(422).json({
      success: false,
      message: e.message
    })
  }

  res.status(200).json({success: true, token: token})
}

const login = async (req: Request, res: Response) => {
  const {email, password} = req.body

  let token: string

  try {
    if (!email || !password) throw new Error("Email or/and password is missing!")
    const user = (await userServices.getUserByEmail(email)) as User
    if (!user) throw new Error(`A user with the email ${email} doesn't exist.`)

    if (
      !(await comparePassword({
        currentPassword: password,
        correctPassword: user.password as string
      }))
    )
      throw new Error("Password is incorrect, please try again.")

    token = (await signToken({_id: user._id as string, email: user.email})) as string
    if (!token) throw new Error("Internal Server Error: Token generation failed!")
  } catch (e: any) {
    return res.json({
      success: false,
      message: e.message
    })
  }

  res.status(200).json({success: true, token: token})
}

export {register, login}

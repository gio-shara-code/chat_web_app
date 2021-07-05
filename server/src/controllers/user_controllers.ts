import {Request, Response, NextFunction} from "express"
import {ResponseBody} from "../interfaces/response_body"
import {User} from "../interfaces/user"
import * as userServices from "../services/db/user_services"

const getUser = async (req: Request, res: Response<ResponseBody>, next: NextFunction) => {
  const {email} = req.query

  if (email) return next()

  let user
  try {
    user = await userServices.getUserById(req.body.userId)
    if (!user) throw new Error("User not found.")
  } catch (e: any) {
    return res.json({
      success: false,
      message: e.message
    })
  }

  res.status(200).json({
    success: true,
    user: user
  })
}

const getUserByEmail = async (req: Request, res: Response<ResponseBody>) => {
  const {email} = req.query

  let user: User

  try {
    user = (await userServices.getUserByEmail(email as string)) as User
    if (!user) throw new Error("Contact not found")
  } catch (e: any) {
    return res.json({
      success: false,
      message: e.message
    })
  }

  res.status(200).json({
    success: true,
    user: user
  })
}

export {getUser, getUserByEmail}

import {Request, Response} from "express"
import {ResponseBody} from "../interfaces/response_body"
import {User} from "../interfaces/user"
import {getUserById} from "../services/db/user_services"

const getUser = async (req: Request, res: Response<ResponseBody>) => {
  let user

  try {
    user = await getUserById(req.body.userId)
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

export {getUser}

import { User } from "./user";

export interface ResponseBody {
  success: boolean
  message?: string
  token?: string
  user?: User
  users?: User[]
}

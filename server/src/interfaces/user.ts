import { Status } from "../enums/status";

export interface User {
  email: string
  name: string
  createdOn: number
  password?: string
  _id?: string
  status: Status
}

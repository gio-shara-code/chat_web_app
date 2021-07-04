import { Status } from '../enums/status'

export interface User {
    email: string
    fullName: string
    status?: Status
    password?: string
    createdOn?: number
    _id?: string
}

import { User } from "./user";

export interface ApiResponse {
    success: boolean
    message?: string
    token?: string
    user?: User
}

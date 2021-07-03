import { Status } from '../enums/status'

interface User {
    id: string
    firstname: string
    lastname: string
    status: Status
    profileImage?: string
}

export { User }

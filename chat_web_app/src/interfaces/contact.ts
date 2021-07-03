import { Status } from '../enums/status'

interface Contact {
    firstname: string
    lastname: string
    lastMessage: string
    lastMessageDateNumber: number
    status: Status
    lastMessageSeen: boolean
    lastMessageFromId: string
}

export { Contact }

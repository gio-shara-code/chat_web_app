import { MessageType } from '../enums/message_type'

interface Message {
    id: string
    content: string
    type: MessageType
    sentOn: number
    sentFromId: string
    messageSeen?: boolean
    author: string
    authorProfileImage: string
}

export { Message }

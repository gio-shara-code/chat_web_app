import {Status} from "../enums/status"

export interface Contact {
  name: string
  lastMessageSeen: boolean
  lastMessage: string
  lastMessageDateNumber: number
  lastMessageFromId: string
  status: Status
  
}
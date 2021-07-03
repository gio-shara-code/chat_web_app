import React, { useEffect, useContext, useState } from 'react'
import { SelectedMessageIdContext } from '../../../context/selected_contact_id_context'
import { UserContext } from '../../../context/user_context'
import MessageText from './message_containers/MessageText'
import { dummyMessages } from './dummy_messages'
import { MessageType } from '../../../enums/message_type'
import { Message } from '../../../interfaces/message'

const MessagesArea = () => {
    const selectedMessageId = useContext(SelectedMessageIdContext)
    const user = useContext(UserContext)
    const [messages, setMessages] = useState<Message[]>(dummyMessages)

    const componentDidMount = () => {
        //retrieve messages localy or from db based on messages
        selectedMessageId.value
    }

    useEffect(componentDidMount, [])

    return (
        <div className="flex-1 flex flex-col bg-green-100">
            {dummyMessages.map((message: Message) => {
                switch (message.type) {
                    case MessageType.message:
                        return <MessageText key={message.id} itsMe={user.value.id === message.sentFromId} message={message} withProfile={false} />
                    case MessageType.video:
                        return
                    case MessageType.image:
                        return
                    case MessageType.audio:
                        return
                    default:
                        throw new Error(`This message type ${message.type} is new, please add in then enum [MessageType] is needed`)
                }
            })}
        </div>
    )
}
export default MessagesArea

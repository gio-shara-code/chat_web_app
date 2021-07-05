import React, { useEffect, useContext, useState } from 'react'
import { SelectedMessageIdContext } from '../../../../context/selected_contact_id_context'
import { TokenContext } from '../../../../context/token_context'
import MessageText from './message_containers/MessageText'
import { dummyMessages } from './dummy_messages'
import { MessageType } from '../../../../enums/message_type'
import { Message } from '../../../../interfaces/message'
import { User } from '../../../../interfaces/user'
import { UserContext } from '../../../../context/user_context'

interface Props {
    onProfileClick(): void
}
const Messages: React.FC<Props> = ({ onProfileClick }) => {
    const selectedMessageId = useContext(SelectedMessageIdContext)
    const user = useContext(UserContext)
    const [messages, setMessages] = useState<Message[]>(dummyMessages)

    const componentDidMount = () => {
        //retrieve messages localy or from db based on messages
        selectedMessageId.value
    }

    useEffect(componentDidMount, [])

    console.log(user.value?._id)

    return (
        <div className="flex-1 flex flex-col justify-end overflow-y-auto">
            {messages.map((message: Message, index: number) => {
                switch (message.type) {
                    case MessageType.message:
                        return <MessageText onProfileClick={onProfileClick} key={message.id} itsMe={user.value?._id === message.sentFromId} message={message} />
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
export default Messages

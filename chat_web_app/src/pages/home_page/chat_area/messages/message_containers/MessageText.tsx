import React from 'react'
import { Message } from '../../../../../interfaces/message'
import SeenMessageIcon from '../../../../../assets/icons/seen_message.svg'
import { formatDateNumberToHourMinute } from '../../../../../utils/format_date_utils'
interface Props {
    message: Message
    itsMe: boolean
    onProfileClick(): void
}

const MessageText: React.FC<Props> = ({ message, itsMe, onProfileClick }) => {
    return (
        <div className={`flex flex-col items-${itsMe ? 'end' : 'start'} p-3`}>
            <div className='cursor-pointer' onClick={onProfileClick}>{message.author}</div>

            <div className={`flex flex-col items-${itsMe ? 'end' : 'start'} bg-${itsMe ? 'red-200' : 'hell-blue'} p-5 max-w-screen-sm rounded-2xl rounded-t${itsMe ? 'r' : 'l'}-none`}>
                {message.content}
                <div className={`flex justify-end items-center w-full`}>
                    <span className={`text-xs text-gray ${itsMe ? 'pr-3' : ''}`}>{formatDateNumberToHourMinute(message.sentOn)}</span>
                    {itsMe && <SeenMessageIcon />}
                </div>
            </div>
        </div>
    )
}

export default MessageText

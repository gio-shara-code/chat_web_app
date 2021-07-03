import React from 'react'
import AvatarImage from '../../../../../../components/AvatarImage'
import { Contact } from '../../../../../../interfaces/contact'
import SeenMessageIcon from '../../../../../../assets/icons/seen_message.svg'
import { formatDateNumberToDayMonthYear } from '../../../../../../utils/format_date_utils'

interface Props {
    isCurrentCard?: boolean
    contact: Contact
    onClick(): void
}

const contactCard: React.FC<Props> = ({ isCurrentCard = false, contact, onClick }) => {
    return (    
        <div className="w-full py-4 ">
            <div className={`flex rounded-2xl p-4 ${isCurrentCard && 'bg-dark-blue'} cursor-pointer`} onClick={onClick}>
                <div className="pr-4">
                    <AvatarImage status={contact.status} src={'https://image.gala.de/22089206/t/pA/v6/w1440/r0/-/style-heidi-klum-1.jpg'} alt="Contact Picture" />
                </div>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex justify-between">
                        <h2 className={`text-xl font-poppins font-semibold ${isCurrentCard ? 'text-white' : 'text-black'}`}>
                            {contact.firstname} {contact.lastname}
                        </h2>
                        <p className={`${isCurrentCard ? 'text-white' : 'text-gray'}`}>{formatDateNumberToDayMonthYear(contact.lastMessageDateNumber)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className={`overflow-hidden overflow-ellipsis whitespace-nowrap ${isCurrentCard ? 'text-white' : 'text-gray'}`}>{contact.lastMessage}</div>
                        <div style={{ minWidth: '30px', height: 'auto' }} className="pl-4">
                            {contact.lastMessageSeen && <SeenMessageIcon />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactCard

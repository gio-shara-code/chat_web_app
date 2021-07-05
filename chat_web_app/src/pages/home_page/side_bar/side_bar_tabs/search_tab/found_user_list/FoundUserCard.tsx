import React from 'react'
import { User } from '../../../../../../interfaces/user'
import SendIcon from '../../../../../../assets/icons/send.svg'

interface Props {
    foundUser: User
}

const FoundUserCard: React.FC<Props> = ({ foundUser }) => {
    return (
        <div className="py-2">
            <div className="flex items-center justify-between bg-white rounded-xl px-3">
                <div className="flex flex-col p-2">
                    <span className="font-bold text-lg">{foundUser.name}</span>
                    <span className="text-sm">{foundUser.email}</span>
                </div>
                <SendIcon fill="black" stroke="black" className="cursor-pointer"/>
            </div>
        </div>
    )
}

export default FoundUserCard

import React from 'react'
import CloseIcon from '../../../../../assets/icons/close.svg'

import ContactInfo from './ContactInfo'

interface Props {
    onClose(): void
}

const ProfileSidebar: React.FC<Props> = ({ onClose }) => {
    return (
        <div className="p-5 min-w-450">
            <div className="flex flex-col items-center bg-hell-blue h-full rounded-xl">
                <div className="flex justify-start w-full p-4">
                    <div className="rounded-full bg-dark-blue p-2 w-min cursor-pointer" onClick={onClose}>
                        <CloseIcon fill="white" />
                    </div>
                </div>
                <ContactInfo />
            </div>
        </div>
    )
}

export default ProfileSidebar

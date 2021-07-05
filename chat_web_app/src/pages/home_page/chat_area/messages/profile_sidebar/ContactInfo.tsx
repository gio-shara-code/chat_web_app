import React from 'react'
import AvatarImage from '../../../../../components/AvatarImage'

const ContactInfo = () => {
    return (
        <div className="flex flex-col items-center">
            <span className="text-xl text-dark-blue font-bold pb-20">Contact Info</span>
            <AvatarImage height="h-200" width="w-200" src={'https://image.gala.de/22089206/t/pA/v6/w1440/r0/-/style-heidi-klum-1.jpg'} alt="Contact Picture" />
            <span className="text-xl text-dark-blue font-bold p-4">Kierra Press</span>
            <span>Sr. Visual Designer</span>
            <div className="flex justify-center">
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default ContactInfo

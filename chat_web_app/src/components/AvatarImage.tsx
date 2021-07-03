import React from 'react'
import { getColorBasedOnStatus, Status } from '../enums/status'

interface Props {
    src: string
    alt: string
    status?: Status | undefined
}

const AvatarImage: React.FC<Props> = ({ src, alt, status }) => {
    let statusColor: string = status ? getColorBasedOnStatus(status) : ''

    return (
        <div className="w-55 h-55 inline-block align-middle relative">
            <div className={`rounded-full h-3 w-3 absolute right-0.5 top-0.5  ${status && `border-white border-1.5 bg-${statusColor}-500`}`}></div>
            <img className="w-full h-full rounded-full object-cover border-yellow border-2" src={src} alt={alt} />
        </div>
    )
}

export default AvatarImage

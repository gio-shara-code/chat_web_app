import React, { useRef } from 'react'
import { ConcatenationScope } from 'webpack'
import { getColorBasedOnStatus, Status } from '../../enums/status'
import { toCapitalize } from '../../utils/text_tranformation_utils'

interface Props {
    status: Status
    onClick(status: Status): void
}

const StatusOption: React.FC<Props> = ({ status, onClick }) => {
    return (
        <div onClick={() => onClick(status)} className="flex justify-between items-center px-2 py-0.5 border-t-1.5 border-gray-200 cursor-pointer">
            <div className={`h-2 w-2 bg-${getColorBasedOnStatus(status)}-500 rounded-full`}></div>
            <p className="text-center text-white text-xs">{toCapitalize(status)}</p>
        </div>
    )
}

export default StatusOption

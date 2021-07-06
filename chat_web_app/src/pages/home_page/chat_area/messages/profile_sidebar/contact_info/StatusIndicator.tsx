import React from 'react'
import { Status, getColorBasedOnStatus } from '../../../../../../enums/status'
import { toCapitalize } from '../../../../../../utils/text_tranformation_utils'

interface Props {
    status: Status
}

const StatusIndicator: React.FC<Props> = ({ status }) => {
    return (
        <div className="flex items-center justify-between bg-dark-blue rounded-xl w-32 px-2 py-0.5">
            <div className={`w-2 h-2 bg-${getColorBasedOnStatus(status)}-400 rounded-full`}></div>
            <span className="text-white">{toCapitalize(status)}</span>
            <div></div>
        </div>
    )
}

export default StatusIndicator

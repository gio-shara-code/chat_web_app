import React, { useState, useRef, useEffect, MouseEventHandler } from 'react'
import ArrowDownIcon from '../../assets/icons/arrow_down.svg'
import { getColorBasedOnStatus, Status } from '../../enums/status'
import { toCapitalize } from '../../utils/text_tranformation_utils'
import StatusOption from './StatusOption'

const DropdownStatus = () => {
    const currentStatusNode = useRef<HTMLDivElement>(null)

    const [status, setStatus] = useState<Status>(Status.working)
    const [showDropdownStatus, setDropDownStatusVisibility] = useState<boolean>(false)

    const toggleDropdownStatus = () => setDropDownStatusVisibility((showDropdownStatus) => !showDropdownStatus)

    const onStatusOptionClicked = (status: Status) => setStatus(status)

    const onCurrentStatusBlur = (e: FocusEvent) => setTimeout(toggleDropdownStatus, 200)

    const componentDidMount = () => {
        const cleanUp = () => {
            currentStatusNode.current?.removeEventListener('blur', onCurrentStatusBlur)
        }
        currentStatusNode.current?.addEventListener('blur', onCurrentStatusBlur)

        return cleanUp
    }

    useEffect(componentDidMount, [])

    return (
        <div className="relative">
            <div ref={currentStatusNode} tabIndex={0} className={`flex items-center justify-between bg-dark-blue rounded-${showDropdownStatus ? 't-' : ''}2xl py-1 px-2 relative cursor-pointer`} onClick={toggleDropdownStatus}>
                <div className={`h-2 w-2 bg-${getColorBasedOnStatus(status)}-500 rounded-full`}></div>
                <p className="text-white text-xs px-5">{toCapitalize(status)}</p>
                <ArrowDownIcon />
            </div>

            {showDropdownStatus && (
                <div className="absolute bg-dark-blue w-full opacity-0.1 rounded-b-sm">
                    {Object.values(Status).map((status) => (
                        <StatusOption onClick={onStatusOptionClicked} key={status} status={status} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownStatus

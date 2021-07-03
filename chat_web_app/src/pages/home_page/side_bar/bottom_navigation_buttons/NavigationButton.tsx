import React from 'react'

interface Props {
    isCurrent?: boolean
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    onClick(): void
}

const navigationButton: React.FC<Props> = ({ isCurrent = false, Icon, onClick }) => {
    return (
        <div className="flex flex-col items-center pt-4 cursor-pointer" onClick={onClick}>
            <div className="pb-6">
                <Icon fill={'#6588DE'} stroke={'transparent'} opacity={isCurrent ? '1' : '0.3'} strokeWidth="0.4" className="overflow-visible" />
            </div>
            <div className={`h-1 w-12 ${isCurrent && 'bg-dark-blue'} rounded-t-lg`}></div>
        </div>
    )
}

export default navigationButton

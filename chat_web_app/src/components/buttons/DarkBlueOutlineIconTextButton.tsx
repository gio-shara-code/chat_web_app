import React from 'react'

interface Props {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    text: string
}

const DarkBlueOutlineIconTextButton: React.FC<Props> = ({ Icon, text }) => {
    return (
        <button className="flex items-center border-2 border-dark-blue rounded-2xl p-2 w-inherit">
            <div className="pr-2">
                <Icon />
            </div>
            <span className="text-xl text-dark-blue semi-bold">{text}</span>
        </button>
    )
}

export default DarkBlueOutlineIconTextButton

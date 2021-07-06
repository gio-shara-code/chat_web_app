import React from 'react'

interface Props {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    text: string
}

const BlueBackgroundButton: React.FC<Props> = ({ Icon, text }) => {
    return (
        <button className="bg-pink-200 rounded-xl px-2 py-0.5 outline-none w-32 h-min">
            <div className="flex items-center justify-between">
                <div>
                    <Icon width="20" height="20" fill="white" fontSize="50px" />
                </div>
                <span className="text-white">{text}</span>
                <div></div>
            </div>
        </button>
    )
}

export default BlueBackgroundButton

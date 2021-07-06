import React from 'react'

interface Props {
    topPadding: number
    scrollIndicatorHeight: number
}

const DarkBlueScrollbar: React.FC<Props> = ({ topPadding, scrollIndicatorHeight }) => {
    return (
        <div className="h-inherit py-20 px-2">
            <div style={{ paddingTop: topPadding }} className="h-full w-1 bg-white rounded-xl">
                <div style={{ height: scrollIndicatorHeight }} className="w-1 bg-dark-blue opacity-70 rounded-xl"></div>
            </div>
        </div>
    )
}

export default DarkBlueScrollbar

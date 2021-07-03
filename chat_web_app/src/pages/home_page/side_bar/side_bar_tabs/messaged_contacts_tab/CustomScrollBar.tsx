import React from 'react'

interface Props {
    topPadding: number
    scrollIndicatorHeight: number
}

const customScrollBar: React.FC<Props> = ({ topPadding, scrollIndicatorHeight }) => {
    return (
        <div className="py-20 px-2">
            <div style={{ paddingTop: topPadding }} className="h-full w-2 bg-white rounded-xl">
                <div style={{ height: scrollIndicatorHeight }} className="w-2 bg-dark-blue opacity-70 rounded-xl"></div>
            </div>
        </div>
    )
}

export default customScrollBar

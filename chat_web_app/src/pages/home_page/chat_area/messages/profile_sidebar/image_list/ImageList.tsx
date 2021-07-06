import React from 'react'
import ArrowRight from '../../../../../../assets/icons/arrow_right.svg'

interface Props {
    imagePaths: string[]
}

const ImageList: React.FC<Props> = ({ imagePaths }) => {
    return (
        <div className="flex justify-center items-center flex-wrap">
            {imagePaths.map((imagePath, index) => {
                if (index == 8) {
                    return (
                        <div className="flex items-center justify-center cursor-pointer m-1" style={{ width: '30%' }}>
                            <span className="text-dark-blue pr-2">{imagePaths.length - 7} more</span>
                            <ArrowRight width="20" height="20" />
                        </div>
                    )
                }
                return (
                    <div className="m-1 max-w-30%">
                        <img className="object-cover rounded-xl cursor-pointer" src={imagePath} alt="ImagePath" />
                    </div>
                )
            })}
        </div>
    )
}

export default ImageList

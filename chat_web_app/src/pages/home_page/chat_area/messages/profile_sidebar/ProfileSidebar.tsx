import React from 'react'
import CloseIcon from '../../../../../assets/icons/close.svg'
import ContactInfo from './contact_info/ContactInfo'
import Divider from '../../../../../components/Divider'
import ImageList from './image_list/ImageList'
import { dummyImagePaths } from './image_list/dummy_image_paths'
import ArrowRightIcon from '../../../../../assets/icons/arrow_right.svg'
import DeleteIcon from '../../../../../assets/icons/delete.svg'
import BlockIcon from '../../../../../assets/icons/block.svg'
import DarkBlueOutlineIconTextButton from '../../../../../components/buttons/DarkBlueOutlineIconTextButton'
interface Props {
    onClose(): void
}

const ProfileSidebar: React.FC<Props> = ({ onClose }) => {
    return (
        <div className="p-5 max-w-450 min-w-450">
            <div className="flex flex-col items-center bg-hell-blue h-full rounded-xl p-4 overflow-y-auto">
                <div className="flex justify-start w-full">
                    <div className="rounded-full bg-dark-blue p-2 w-min cursor-pointer" onClick={onClose}>
                        <CloseIcon fill="white" />
                    </div>
                </div>
                <ContactInfo />
                <div className="py-4 w-full">
                    <Divider />
                </div>

                <span className="text-dark-blue font-bold text-xl py-3">Media</span>
                <div className="w-full">
                    <ImageList imagePaths={dummyImagePaths} />
                </div>

                <div className="py-6 w-full">
                    <Divider />
                </div>

                <div className="flex justify-between items-center w-full cursor-pointer">
                    <span className="text-xl text-dark-blue semi-bold">Mute Notifications</span>

                    <div className="rounded-full border-2 border-dark-blue w-4 h-4"></div>
                </div>
                <div className="py-6 w-full">
                    <Divider />
                </div>
                <div className="flex justify-between items-center w-full cursor-pointer">
                    <span className="text-xl text-dark-blue semi-bold">Starred Messages</span>
                    <ArrowRightIcon width="20" height="20" />
                </div>
                <div className="py-6 w-full">
                    <Divider />
                </div>

                <div className="w-full pb-4">
                    <DarkBlueOutlineIconTextButton Icon={BlockIcon} text="Block Contact" />
                </div>
                <div className="w-full">
                    <DarkBlueOutlineIconTextButton Icon={DeleteIcon} text="Delete Chat" />
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar

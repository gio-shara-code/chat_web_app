import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '../../../../../assets/icons/close.svg'
import ContactInfo from './contact_info/ContactInfo'
import Divider from '../../../../../components/Divider'
import ImageList from './image_list/ImageList'
import { dummyImagePaths } from './image_list/dummy_image_paths'
import ArrowRightIcon from '../../../../../assets/icons/arrow_right.svg'
import DeleteIcon from '../../../../../assets/icons/delete.svg'
import BlockIcon from '../../../../../assets/icons/block.svg'
import DarkBlueOutlineIconTextButton from '../../../../../components/buttons/DarkBlueOutlineIconTextButton'
import DarkBlueScrollbar from '../../../../../components/DarkBlueScrollbar'

interface Props {
    onClose(): void
}

const ProfileSidebar: React.FC<Props> = ({ onClose }) => {
    const profileDivRef = useRef<HTMLDivElement>(null)
    const [topPadding, setTopPadding] = useState<number>(0)
    const [scrollIndicatorHeight, setScrollIndicatorHeight] = useState<number>(0)

    const contactsAreScrollable = () => (profileDivRef.current?.offsetHeight as number) < (profileDivRef.current?.scrollHeight as number)

    const getScrollBarHeight = () => ((profileDivRef.current?.offsetHeight as number) / (profileDivRef.current?.scrollHeight as number)) * (profileDivRef.current?.offsetHeight as number)

    const setScrollTop = () => {
        const topPaddingMax = (profileDivRef.current?.offsetHeight as number) - getScrollBarHeight()
        const scrollTopMax = (profileDivRef.current?.scrollHeight as number) - (profileDivRef.current?.offsetHeight as number)
        const scrollTopPadding = ((profileDivRef.current?.scrollTop as number) / scrollTopMax) * topPaddingMax
        setTopPadding(scrollTopPadding)
    }
    const componentDidMount = () => {
        if (contactsAreScrollable()) {
            setScrollIndicatorHeight(getScrollBarHeight() - 40)
        }

        const onContactsScroll = (e: any) => {
            setScrollTop()
        }

        const onWindowResize = (e: UIEvent) => {
            if (contactsAreScrollable()) {
                setScrollTop()
                setScrollIndicatorHeight(getScrollBarHeight() - 40)
            } else {
                setScrollIndicatorHeight(0)
            }
        }

        profileDivRef.current?.addEventListener('scroll', onContactsScroll)
        window.addEventListener('resize', onWindowResize)

        const cleanUp = () => {
            profileDivRef.current?.removeEventListener('scroll', onContactsScroll)
            window.removeEventListener('resize', onWindowResize)
        }
        return cleanUp
    }
    useEffect(componentDidMount, [])

    return (
        <div className="p-5 max-w-450 min-w-450">
            <div className="flex bg-hell-blue h-full rounded-xl p-4 overflow-hidden">
                <div ref={profileDivRef} className="flex flex-col items-center overflow-x-hidden overflow-y-scroll no-scrollbar">
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
                <DarkBlueScrollbar scrollIndicatorHeight={scrollIndicatorHeight} topPadding={topPadding} />
            </div>
        </div>
    )
}

export default ProfileSidebar

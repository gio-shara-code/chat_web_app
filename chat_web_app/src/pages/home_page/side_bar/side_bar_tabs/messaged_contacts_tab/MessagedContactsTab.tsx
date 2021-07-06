import React, { useRef, useEffect, useState } from 'react'
import ContactList from './contact_list/ContactList'
import CustomScrollBar from '../../../../../components/DarkBlueScrollbar'

const MessagedContactsTab = () => {
    const contactListDivRef = useRef<HTMLDivElement>(null)
    const [topPadding, setTopPadding] = useState<number>(0)
    const [scrollIndicatorHeight, setScrollIndicatorHeight] = useState<number>(0)

    const contactsAreScrollable = () => (contactListDivRef.current?.offsetHeight as number) < (contactListDivRef.current?.scrollHeight as number)

    const getScrollBarHeight = () => ((contactListDivRef.current?.offsetHeight as number) / (contactListDivRef.current?.scrollHeight as number)) * (contactListDivRef.current?.offsetHeight as number)

    const setScrollTop = () => {
        const topPaddingMax = (contactListDivRef.current?.offsetHeight as number) - getScrollBarHeight()
        const scrollTopMax = (contactListDivRef.current?.scrollHeight as number) - (contactListDivRef.current?.offsetHeight as number)
        const scrollTopPadding = ((contactListDivRef.current?.scrollTop as number) / scrollTopMax) * topPaddingMax
        setTopPadding(scrollTopPadding)
    }
    const printScrollInfomations = () => {
        console.log('----------------------------------------------')
        console.log(`scrollHeight: ${contactListDivRef.current?.scrollHeight}`)
        console.log(`scrollTop: ${contactListDivRef.current?.scrollTop}`)
        console.log(`offsetHeight: ${contactListDivRef.current?.offsetHeight}`)
    }

    const componentDidMount = () => {
        if (contactsAreScrollable()) {
            setScrollIndicatorHeight(getScrollBarHeight() - 40)
        }

        const onContactsScroll = (e: any) => {
            setScrollTop()
            printScrollInfomations()
        }

        const onWindowResize = (e: UIEvent) => {
            printScrollInfomations()
            if (contactsAreScrollable()) {
                setScrollTop()
                setScrollIndicatorHeight(getScrollBarHeight() - 40)
            } else {
                setScrollIndicatorHeight(0)
            }
        }

        contactListDivRef.current?.addEventListener('scroll', onContactsScroll)
        window.addEventListener('resize', onWindowResize)

        const cleanUp = () => {
            contactListDivRef.current?.removeEventListener('scroll', onContactsScroll)
            window.removeEventListener('resize', onWindowResize)
        }
        return cleanUp
    }

    useEffect(componentDidMount, [])

    return (
        <div className="flex-1 flex px-3 bg-hell-blue rounded-t-3xl overflow-hidden">
            <ContactList ref={contactListDivRef} />
            {scrollIndicatorHeight !== 0 && <CustomScrollBar scrollIndicatorHeight={scrollIndicatorHeight} topPadding={topPadding} />}
        </div>
    )
}

export default MessagedContactsTab

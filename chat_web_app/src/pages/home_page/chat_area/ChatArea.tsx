import React, { useState } from 'react'
import ChatController from './ChatController'
import Messages from './messages/Messages'
import ProfileSidebar from './messages/profile_sidebar/ProfileSidebar'

const ChatArea = () => {
    const [isProfileSidebarVisible, setProfileSidebarVisiblity] = useState<boolean>(true)

    const toggleProfileSidebarVisibility = () => setProfileSidebarVisiblity((visibility) => !visibility)

    const onProfileClick = () => {
        toggleProfileSidebarVisibility()
    }

    const onCloseSidebarButtonClick = () => toggleProfileSidebarVisibility()
    return (
        <main className="flex-1 flex">
            {/* Chat | Media */}
            <div className="flex-1 flex flex-col">
                <Messages onProfileClick={onProfileClick} />
                <ChatController />
            </div>

            {isProfileSidebarVisible && <ProfileSidebar onClose={onCloseSidebarButtonClick} />}
        </main>
    )
}

export default ChatArea

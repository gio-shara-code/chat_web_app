import React from 'react'
import ChatController from './ChatController'
import MessagesArea from './MessagesArea'

const ChatArea = () => {
    return (
        <main className="flex-1 flex flex-col ">
            {/* Chat | Media */}
            <MessagesArea />
            <ChatController />
        </main>
    )
}

export default ChatArea
    
import React from 'react'
import OptionIcon from '../../../assets/icons/option.svg'
import AttachmentIcon from '../../../assets/icons/attachment.svg'
import VoiceIcon from '../../../assets/icons/voice.svg'
import SendIcon from '../../../assets/icons/send.svg'



const ChatController = () => {
    return (
        <div className="p-5">
            <div className="flex items-center">
                <div className="pr-5">
                    <OptionIcon className="cursor-pointer" />
                </div>

                <div className="flex-1 flex items-center border-gray-200 border-2 rounded-xl">
                    <div className="px-5">
                        <AttachmentIcon className="cursor-pointer" />
                    </div>
                    <div className="pr-5">
                        <VoiceIcon className="cursor-pointer" />
                    </div>
                    <div className="flex-1">
                        <input type="text" placeholder="Type a new message..." className="w-full border-none outline-none" />
                    </div>
                    <button className="flex items-center bg-dark-blue rounded-lg px-4 py-2 outline-none border-none">
                        <span className="text-white text-sm pr-2">Send</span>
                        <SendIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatController

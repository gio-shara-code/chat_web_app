import React, { useEffect, useState } from 'react'
import SideBar from './side_bar/SideBar'
import ChatArea from './chat_area/ChatArea'
import { SelectedMessageIdContext } from '../../context/selected_contact_id_context'

const HomePage = () => {
    const [selectedContactId, setSelectedContactId] = useState<string>('')

    const componentDidMount = () => {
        //Connect to the server
    }
    useEffect(componentDidMount, [])

    return (
        <div className="flex align-center h-full">
            <SelectedMessageIdContext.Provider value={{ value: selectedContactId, set: setSelectedContactId }}>
                <SideBar />
                <ChatArea />
            </SelectedMessageIdContext.Provider>
        </div>
    )
}

export default HomePage

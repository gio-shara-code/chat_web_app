import React, { useEffect, useState } from 'react'
import SideBar from './side_bar/SideBar'
import ChatArea from './chat_area/ChatArea'
import { SelectedMessageIdContext } from '../../context/selected_contact_id_context'
import { User } from '../../interfaces/user'

const HomePage = () => {
    const [selectedContactId, setSelectedContactId] = useState<string>('')
    const [user, setUser] = useState<User>()

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

import React, { useContext, useEffect, useState } from 'react'
import SideBar from './side_bar/SideBar'
import ChatArea from './chat_area/ChatArea'
import { SelectedMessageIdContext } from '../../context/selected_contact_id_context'
import { User } from '../../interfaces/user'
import { getUser } from '../../api/user_api'
import { TokenContext } from '../../context/token_context'
import { UserContext } from '../../context/user_context'
const HomePage = () => {
    const [selectedContactId, setSelectedContactId] = useState<string>('')
    const [user, setUser] = useState<User | undefined>()
    const token = useContext(TokenContext)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const toggleLoadingProcess = () => setIsLoading((isLoading) => !isLoading)

    const fetchUserInformation = async () => {
        toggleLoadingProcess()
        setTimeout(async () => {
            const res = await getUser(token.value as string)
            if (res.success) {
                setUser(res.user)
            } else {
                console.log(res.message)
            }
            toggleLoadingProcess()
        }, 2000)
    }

    const componentDidMount = () => {
        fetchUserInformation()
    }
    useEffect(componentDidMount, [])

    if (isLoading) {
        return <div className="flex justify-center items-center h-full text-3xl">Welcome to Chat Web App...</div>
    }

    return (
        <UserContext.Provider
            value={{
                set: setUser,
                value: user,
            }}
        >
            <SelectedMessageIdContext.Provider value={{ value: selectedContactId, set: setSelectedContactId }}>
                <div className="flex h-full">
                    <SideBar />
                    <ChatArea />
                </div>
            </SelectedMessageIdContext.Provider>
        </UserContext.Provider>
    )
}

export default HomePage

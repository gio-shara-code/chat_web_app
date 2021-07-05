import React, { useContext, useState } from 'react'
import { User } from '../../../../../interfaces/user'
import FoundUserList from './found_user_list/FoundUserList'
import { getUser, getUsersByName } from '../../../../../api/user_api'
import { TokenContext } from '../../../../../context/token_context'
import { UserSearchingState } from '../../../../../enums/user_searching_state'
import { dummyUsers } from './found_user_list/dummy_user_list'

const searchTab = () => {
    const token = useContext(TokenContext)

    const [error, setError] = useState<string>('')
    const [searchedName, setSearchName] = useState<string>('')
    const [foundUsers, setFoundUsers] = useState<User[]>(dummyUsers)
    const [userSearchingState, setUserSearchingState] = useState<UserSearchingState>(UserSearchingState.notSearching)

    const onSearchContactInputChange = (e: any) => {
        setUserSearchingState(UserSearchingState.notSearching)
        setSearchName(e.target.value)
        setFoundUsers([])
    }

    const fetchUserByName = async () => {
        const res = await getUsersByName(token.value as string, searchedName)
        if (res.success) {
            if (res.users?.length !== 0) {
                setUserSearchingState(UserSearchingState.found)
                setFoundUsers(res.users as User[])
            } else {
                setUserSearchingState(UserSearchingState.notFound)
            }
        } else {
            setUserSearchingState(UserSearchingState.error)
            setError(res.message as string)
        }
    }

    const onSearchContactInputKeyDown = async (e: any) => {
        if (e.code === 'Enter') {
            setUserSearchingState(UserSearchingState.searching)
            await fetchUserByName()
        }
    }

    return (
        <div className="flex-1 flex flex-col justify-start px-3 bg-hell-blue rounded-t-3xl">
            <div className="py-3">
                <input onKeyDown={onSearchContactInputKeyDown} className="w-full py-2 px-3" type="text" value={searchedName} onChange={onSearchContactInputChange} placeholder="Search for a new contact..." />
            </div>
            {UserSearchingState.found === userSearchingState && <FoundUserList foundUsers={foundUsers} />}

            <div className="flex items-center justify-center h-full text-2xl text-center">
                {UserSearchingState.error === userSearchingState && <span className="text-red-400">{error}</span>}
                {UserSearchingState.notFound === userSearchingState && `Users with the name ${searchedName} not found`}
                {UserSearchingState.notSearching === userSearchingState && 'Search for users you want to chat with'}
                {UserSearchingState.searching === userSearchingState && 'Searching for users'}
            </div>
        </div>
    )
}

export default searchTab

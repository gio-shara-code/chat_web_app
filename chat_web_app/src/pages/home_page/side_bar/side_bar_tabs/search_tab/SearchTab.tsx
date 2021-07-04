import React, { useState } from 'react'
import { User } from '../../../../../interfaces/user'
import SearchContactList from './SearchContactList'

const searchTab = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const [searchedContactName, setSearchContactName] = useState<string>('')

    const [foundContacts, setFoundContacts] = useState<User[]>([])

    const toggleLoadingProcess = () => setLoading((isLoading) => !isLoading)

    const onSearchContactInputChange = (e: any) => setSearchContactName(e.target.value)

    const onSearchContactInputKeyDown = (e: any) => {
        if (e.code === 'Enter') {
            //Search for contacts
            toggleLoadingProcess()

            setTimeout(() => {
                toggleLoadingProcess()
            }, 1000)
        }
    }

    return (
        <div className="flex-1 flex flex-col justify-start px-3 bg-hell-blue rounded-t-3xl">
            <div className="py-3">
                <input onKeyDown={onSearchContactInputKeyDown} className="w-full py-2 px-3" type="text" value={searchedContactName} onChange={onSearchContactInputChange} placeholder="Search for a new contact..." />
            </div>

            <SearchContactList searchingForContacts={isLoading} foundContacts={foundContacts} searchedContactName={searchedContactName} />
        </div>
    )
}

export default searchTab

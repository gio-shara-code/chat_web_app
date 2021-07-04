import React, { useEffect, useState } from 'react'
import { User } from '../../../../../interfaces/user'

interface Props {
    searchedContactName: string
    searchingForContacts: boolean
    foundContacts: User[]
}
const SearchContactList: React.FC<Props> = ({ searchedContactName, searchingForContacts, foundContacts }) => {
    const componentDidMount = () => {
        //Make a query for the search contact name
    }

    useEffect(componentDidMount, [])

    if (!searchedContactName) {
        return <div className="flex justify-center items-center  w-full h-full">Please search for a contact you want to chat with</div>
    }

    if (searchingForContacts) {
        return <div className="flex justify-center items-center w-full h-full text-green-400">Searching for contacts...</div>
    }

    return (
        <div className="w-full h-full">
            {foundContacts.length === 0 ? (
                <div className="flex justify-center items-center h-full w-full">No Contacts were found </div>
            ) : (
                <div>
                    {foundContacts.map((contact) => {

                        return <div ></div>
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchContactList

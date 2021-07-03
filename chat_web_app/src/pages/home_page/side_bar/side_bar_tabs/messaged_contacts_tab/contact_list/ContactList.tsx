import React, { useState } from 'react'
import { Contact } from '../../../../../../interfaces/contact'
import ContactCard from './ContactCard'
import { dummyContacts } from './dummy_contact_list'
import './ContactList.css'

interface Props {}

const contactList = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
    const [contacts, setContacts] = useState<Contact[]>(dummyContacts)
    const [selectedContactId, setSelectedContactId] = useState<string>(dummyContacts[0].lastMessageFromId)

    const onContactCardClicked = (contact: Contact) => {
        setSelectedContactId(contact.lastMessageFromId)
    }

    return (
        <div ref={ref} className="flex flex-col items-start overflow-x-hidden overflow-y-scroll no-scrollbar">
            {contacts.map((contact) => (
                <ContactCard onClick={() => onContactCardClicked(contact)} contact={contact} key={contact.lastMessageFromId} isCurrentCard={selectedContactId === contact.lastMessageFromId} />
            ))}
        </div>
    )
})

export default contactList

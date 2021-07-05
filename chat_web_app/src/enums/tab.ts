import ContactIcon from '../assets/icons/contact.svg'
import StarIcon from '../assets/icons/star.svg'
import SearchIcon from '../assets/icons/search.svg'
import ContactsIcon from '../assets/icons/contacts.svg'

enum Tab {
    messageContact = 'messageContact',
    contacts = 'contacts',
    favorite = 'favorite',
    search = 'search',
}

const getIconBasedInTabEnum = (tab: Tab) => {
    switch (tab) {
        case Tab.messageContact:
            return ContactIcon
        case Tab.contacts:
            return ContactsIcon
        case Tab.favorite:
            return StarIcon

        case Tab.search:
            return SearchIcon
        default:
            throw new Error(`${tab} doesn't exists, please add if needed.`)
    }
}
export { Tab, getIconBasedInTabEnum }

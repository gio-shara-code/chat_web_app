import { v4 } from 'uuid'
import { Status } from '../../../../../../enums/status'
import { Contact } from '../../../../../../interfaces/contact'

const dummyContacts: Contact[] = [
    {
        name: 'Kierra Press',
        lastMessageSeen: true,
        lastMessage: 'Did you see the new movie of sdakjnf kjdsaf dskaj fkjdsa fkjdsa fkjdsa f',
        lastMessageDateNumber: Date.now(),
        lastMessageFromId: v4(),
        status: Status.working,
    },
    {
        name: 'Kierra Press',
        lastMessageSeen: true,
        lastMessage: 'Did you see the new movie of sdakjnf kjdsaf dskaj fkjdsa fkjdsa fkjdsa f',
        lastMessageDateNumber: Date.now(),
        lastMessageFromId: v4(),
        status: Status.working,
    },
]
export { dummyContacts }

import { v4 } from 'uuid'
import { MessageType } from '../../../../enums/message_type'
import { Message } from '../../../../interfaces/message'
const dummyMessages: Message[] = [
    {
        content: 'Hey!',
        sentFromId: '60e18edcc927042d64d72d38',
        sentOn: Date.now(),
        type: MessageType.message,
        id: v4(),
        author: 'Giorgi',
        authorProfileImage: '',
    },
    {
        content: 'Hello World Hello World Hello World Hello World Hello World Hello World Hello Worldw-8/12 w-8/12 w-8/12w-8/12w-8/12 w-8/12 w-8/12 w-8/12 w-8/12  w-8/12 w-8/12 w-8/12 w-8/12 w-8/12 w-8/12',
        sentFromId: '',
        sentOn: Date.now(),
        type: MessageType.message,
        id: v4(),
        author: 'Giorgi',
        authorProfileImage: '',
    },
    {
        content: 'Hello World',
        sentFromId: '',
        sentOn: Date.now(),
        type: MessageType.message,
        id: v4(),
        author: 'Giorgi',
        authorProfileImage: '',
    },
]
export { dummyMessages }

import { v4 } from 'uuid'
import { Status } from '../../../../../../enums/status'

export const dummyUsers = [
    {
        email: 'giorgi@code.berlin',
        name: 'Giorgi Sharashenidze',
        _id: v4(),
        createdOn: Date.now(),
        status: Status.available,
    },
    {
        email: 'giorgi@code.berlin',
        name: 'Giorgi Sharashenidze',
        _id: v4(),
        createdOn: Date.now(),
        status: Status.available,
    },
    {
        email: 'giorgi@code.berlin',
        name: 'Giorgi Sharashenidze',
        _id: v4(),
        createdOn: Date.now(),
        status: Status.available,
    },
]

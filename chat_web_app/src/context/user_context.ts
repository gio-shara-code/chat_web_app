import React from 'react'
import { User } from '../interfaces/user'

interface UserContextInterface {
    value: User | undefined
    set(t: User): void
}

const context = React.createContext({
    value: {},
    set: (u) => {},
} as UserContextInterface)

export { context as UserContext }

import React from 'react'

interface TokenContextInterface {
    value: string | null
    set(t: string): void
}
const context = React.createContext({
    value: '',
    set: (t) => {},
} as TokenContextInterface)

export { context as TokenContext }

import React from 'react'

const context = React.createContext({
    value: '',
    set: (token) => {},
} as {
    value: string | null
    set(user: string): void
})

export { context as TokenContext }

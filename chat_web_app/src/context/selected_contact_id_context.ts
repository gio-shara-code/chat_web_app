import React from 'react'

const context = React.createContext({
    value: {},
    set: (a) => {},
} as {
    value: string
    set(a: string): void
})

export { context as SelectedMessageIdContext }

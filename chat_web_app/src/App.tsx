import React, { useState } from 'react'
import HomePage from './pages/home_page/HomePage'
import { v4 } from 'uuid'
import { UserContext } from './context/user_context'

const App = () => {
    const [user, setUser] = useState<User>({
        firstname: 'Mehmet',
        lastname: 'Revnaki',
        id: '21dc1c51-cf94-4c4d-b9a6-e69a3f38a888',
        status: 'working',
        profileImage: 'https://cdn.luxe.digital/media/2019/09/12084906/casual-dress-code-men-street-style-luxe-digital-1.jpg',
    })
    return (
        <UserContext.Provider value={{ value: user, set: setUser }}>
            <HomePage />
        </UserContext.Provider>
    )
}

export default App

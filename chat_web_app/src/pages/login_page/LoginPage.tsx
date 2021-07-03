import React, { useState } from 'react'
import PrimaryInput from '../../components/inputs/PrimaryInput'
const LoginPage = () => {
    const [email, setEmail] = useState<string>('gio.sharashenidze@code.berlin')
    const [fullName, setFullName] = useState<string>('Giorgi Sharashenidze')
    const [password, setPassword] = useState<string>('123456')

    const onEmailChange = (e: any) => setEmail(e.target.value)

    const onPasswordChange = (e: any) => setPassword(e.target.value)
    const onFullNameChange = (e: any) => setFullName(e.target.value)
    const onLoginInButtonClick = () => {
        //Make login request and get token
    }
    return (
        <div className="flex flex-col px-3 pt-24">
            <label>Name:</label>
            <PrimaryInput type="text" value={fullName} onChange={onFullNameChange} />

            <br />
            <label>Email:</label>
            <PrimaryInput type="email" value={email} onChange={onEmailChange} />

            <br />
            <label>Password:</label>
            <PrimaryInput type="password" value={password} onChange={onPasswordChange} />

            <br />
            <div className='text-center'>
                <button className="border-2 border-black px-2" onClick={onLoginInButtonClick}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginPage

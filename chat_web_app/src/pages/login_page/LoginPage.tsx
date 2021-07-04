import React, { useState, useContext } from 'react'
import { login } from '../../api/auth_api'
import PrimaryInput from '../../components/inputs/PrimaryInput'
import { ApiResponse } from '../../interfaces/api_response'

import { TokenContext } from '../../context/token_context'

const LoginPage = () => {
    const token = useContext(TokenContext)

    const [email, setEmail] = useState<string>('gio.sharashenidze@code.berlin')
    const [password, setPassword] = useState<string>('123456')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const onEmailChange = (e: any) => setEmail(e.target.value)

    const onPasswordChange = (e: any) => setPassword(e.target.value)

    const toggleLoadingProcess = () => setIsLoading((isLoading) => !isLoading)

    const onLoginInButtonClick = async () => {
        const user = {
            email: email,
            password: password,
        }

        toggleLoadingProcess()
        const resData: ApiResponse = await login(user)

        if (resData.success) {
            token.set(resData.token as string)
        } else {
            setError(resData.message as string)
            toggleLoadingProcess()
        }
    }

    if (isLoading) {
        return <div className="flex justify-center items-center w-full h-full text-2xl">Loading...</div>
    }

    return (
        <div className="flex flex-col px-3 pt-24">
            <br />
            <label>Email:</label>
            <PrimaryInput type="email" value={email} onChange={onEmailChange} />

            <br />
            <label>Password:</label>
            <PrimaryInput type="password" value={password} onChange={onPasswordChange} />

            <br />
            <div className="text-center">
                <button className="border-2 border-black px-2" onClick={onLoginInButtonClick}>
                    Login
                </button>
            </div>
            {error && <div className="text-red-500">{error}</div>}
        </div>
    )
}

export default LoginPage

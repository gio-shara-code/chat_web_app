import axios, { AxiosResponse } from 'axios'
import { User } from '../interfaces/user'
import { ApiResponse } from '../interfaces/api_response'

const register = async (user: User): Promise<ApiResponse> => {
    const config = {
        headers: { 'Content-Type': 'application/json' },
    }

    const body = {
        name: user.fullName,
        email: user.email,
        password: user.password,
    }

    let response: AxiosResponse
    try {
        response = await axios.post('/auth/register', body, config)
    } catch (e) {
        console.log(`Registering user failed, with the error: ${e}`)
        return {
            success: false,
            message: 'Axios failed',
        }
    }

    return response.data
}

const login = async (user: { email: string; password: string }): Promise<ApiResponse> => {
    const config = {
        headers: { 'Content-Type': 'application/json' },
    }
    const body = {
        email: user.email,
        password: user.password,
    }

    let response: AxiosResponse
    try {
        response = await axios.post('/auth/login', body, config)
    } catch (e) {
        console.log(`Logging user failed, with the error: ${e}`)
        return {
            success: false,
            message: 'Axios failed',
        }
    }
    return response.data
}

export { register, login }

import axios, { AxiosResponse } from 'axios'
import { ApiResponse } from '../interfaces/api_response'

const getUser = async (token: string): Promise<ApiResponse> => {
    const headers = {
        authorization: `Bearer ${token}`,
    }

    let res: AxiosResponse
    try {
        res = await axios.get('/user', {
            headers: headers,
        })
    } catch (e) {
        console.log(`user_api.ts[getUser]: ${e}`)
        return {
            success: false,
            message: 'Fetching user information failed.',
        }
    }

    return {
        success: true,
        user: res.data.user,
    }
}

const getUsersByName = async (token: string, name: string): Promise<ApiResponse> => {
    const headers = {
        authorization: `Bearer ${token}`,
    }

    let res: AxiosResponse
    try {
        res = await axios.get(`/users?name=${name}`, {
            headers: headers,
        })
    } catch (e) {
        console.log(`user_api.ts[getUser]: ${e}`)
        return {
            success: false,
            message: 'Fetching users by name failed.',
        }
    }

    return {
        success: true,
        users: res.data.users,
    }
}

export { getUser, getUsersByName }

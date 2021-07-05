import axios, { AxiosResponse } from 'axios'
import { ApiResponse } from '../interfaces/api_response'

const getUser = async (token: string): Promise<ApiResponse> => {
    const headers = {
        'Content-Type': 'Application/json',
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

export { getUser }

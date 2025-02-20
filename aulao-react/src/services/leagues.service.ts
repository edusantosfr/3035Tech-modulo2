import { API } from './api'

export async function getLeagues() {
    try {
        const response = await API.get('/leagues')
        return response
    } catch (err) {
        throw new Error(err as string);
    }
}
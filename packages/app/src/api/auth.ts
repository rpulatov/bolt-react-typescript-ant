import client from './client'


export function login(email: string, password: string) {
    return client.post('/users/login',{ email, password})
}
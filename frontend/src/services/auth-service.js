import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL

const AUTH_URL = `${SERVER_API_URL}/auth`
const USERS_URL = `${SERVER_API_URL}/users`

export const login = async ({ email, password }) => {
    const response = await axios.post(`${AUTH_URL}/login`, { email, password });
    const user = response.data
    return user
}


export const register = async ( userData ) => {
    const response = await axios.post(`${AUTH_URL}/register`,  userData );
    const user = response.data
    return user
}

export const getUser = async () => {
    const response = await axios.get(USERS_URL)
    const user = response.data
    return user
}
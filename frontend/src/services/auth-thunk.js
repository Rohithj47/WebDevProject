import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from './auth-service.js'


export const registerThunk = createAsyncThunk(
    'user/register',
    async (data) => {
        const response = await userService.register(data)
        return response.data
    }
)

export const loginThunk = createAsyncThunk(
    'user/login',
    async ({ email, password }) => {
        try {

            const user = await userService.login({ email, password })
            return user
        } catch(err) {
            throw Error('Login Failed')
        }
    }
)

export const getUserThunk = createAsyncThunk(
    'user/getUser',
    async () => {
        const response = await userService.getUser()
        console.log(response.data)
        return response.data
    }
)
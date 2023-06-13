import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, getUserThunk } from "../services/auth-thunk";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null
    },
    reducers: {},
    extraReducers: {
        [registerThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            },
        [loginThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            },
        [getUserThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            }
    }
})

export default userSlice.reducer
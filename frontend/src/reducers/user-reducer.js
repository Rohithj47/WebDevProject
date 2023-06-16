import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, getUserThunk } from "../services/auth-thunk";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        loading: false,
        error: null
    },
    reducers: {},
    // extraReducers: {
    //     [registerThunk.fulfilled]:
    //         (state, { payload }) => {
    //             state.currentUser = payload
    //         },
    //     [loginThunk.fulfilled]:
    //         (state, { payload }) => {
    //             state.currentUser = payload
    //             console.log(state.currentUser)
    //         },
    //     [getUserThunk.fulfilled]:
    //         (state, { payload }) => {
    //             state.currentUser = payload
    //         }
    // }
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false 
                state.currentUser = action.payload
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(getUserThunk.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload)
                state.currentUser = action.payload
            })
    }
})

export default userSlice.reducer
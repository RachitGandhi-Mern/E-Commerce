import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data : [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
    loaduser:(state,action) => {
        state.data = action.payload
        console.log(action)
        }
    },
})


export default userSlice.reducer;
export const {loaduser} = userSlice.actions
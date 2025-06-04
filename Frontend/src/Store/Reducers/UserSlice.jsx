import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data : [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loaduser:(state,action) => {
        }
    },
})


export default userSlice.reducer;
export const {loadData} = userSlice.actions
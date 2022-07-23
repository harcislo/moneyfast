import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    removeToken(state) {
      state.token = null
    }
  }
})

export default userSlice.reducer
export const {setToken, removeToken} = userSlice.actions
import { createSlice } from '@reduxjs/toolkit'

const initialState = { authenticated: false, userEmail: null, lastAuthenticated: null }

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.authenticated = true
      state.userEmail = action.payload.userEmail
      state.lastAuthenticated = new Date()
    },
  },
})


export const { setLoggedIn } = authSlice.actions
export default authSlice.reducer


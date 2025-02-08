import { createSlice } from "@reduxjs/toolkit"

interface authSliceState {
  token: string
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: authSliceState = {
  token: "",
  isAuthenticated: false,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.token = ""
      state.isAuthenticated = false
    },
  },
})

export const { setToken, logout } = authSlice.actions
export default authSlice.reducer

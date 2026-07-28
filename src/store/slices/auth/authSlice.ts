import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { User } from "@/store/types/authApi.types"

type AuthState = {
  token: string | null
  user: User | null
}

const getStoredUser = (): User | null => {
  const user = localStorage.getItem("super-admin-user")

  return user ? JSON.parse(user) : null
}

const initialState: AuthState = {
  token: localStorage.getItem("super-admin-token"),
  user: getStoredUser(),
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        token: string
        user: User
      }>
    ) => {
      state.token = action.payload.token
      state.user = action.payload.user
    },

    clearCredentials: (state) => {
      state.token = null
      state.user = null
    },
  },
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer

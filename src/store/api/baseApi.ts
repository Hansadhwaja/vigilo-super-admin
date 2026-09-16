import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react"

import type { RootState } from "@/store/store"
import { clearCredentials } from "../slices/auth/authSlice"

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }

    return headers
  },
})

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    localStorage.removeItem("super-admin-token")
    localStorage.removeItem("super-admin-user")

    api.dispatch(clearCredentials())

    window.location.replace("/login")
  }

  return result
}

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: baseQueryWithAuth,

  tagTypes: [
    "Auth",
    "Tenants",
    "Plans",
    "Billing",
    "Profile",
    "Dashboard",
    "Analytics",
  ],

  endpoints: () => ({}),
})

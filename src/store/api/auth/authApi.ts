import { baseApi } from "@/store/api/baseApi"

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi

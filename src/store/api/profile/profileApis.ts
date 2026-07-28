import { baseApi } from "../baseApi"

export const profileApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/users/get-profile",
      providesTags: ["Profile"],
    }),
  }),
})

export const { useGetProfileQuery } = profileApis

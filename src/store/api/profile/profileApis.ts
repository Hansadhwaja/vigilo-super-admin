import { baseApi } from "../baseApi"

export const profileApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/users/get-profile",
      providesTags: ["Profile"],
    }),
    editProfile: builder.mutation({
      query: (data) => ({
        url: "/users/edit-profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
})

export const { useGetProfileQuery, useEditProfileMutation } = profileApis

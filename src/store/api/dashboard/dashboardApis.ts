import { baseApi } from "../baseApi"

export const dashboardApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardContent: builder.query({
      query: () => "/stats/super-admin",
      providesTags: ["Dashboard"],
    }),
  }),
})

export const { useGetDashboardContentQuery } = dashboardApis

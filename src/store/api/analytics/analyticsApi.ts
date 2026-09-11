import { baseApi } from "../baseApi"

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnalyticsStats: builder.query({
      query: (params = {}) => {
        const qs = new URLSearchParams()
        if (params.range) qs.set("range", params.range)
        if (params.companyAdminId)
          qs.set("companyAdminId", params.companyAdminId)

        return qs.toString()
          ? `/stats/analytics?${qs.toString()}`
          : "/stats/analytics"
      },
      providesTags: ["Analytics"],
    }),
  }),
})

export const { useGetAnalyticsStatsQuery } = analyticsApi

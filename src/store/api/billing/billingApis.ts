import { baseApi } from "@/store/api/baseApi"

export const billingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTransactions: builder.query({
      query: (params = {}) => {
        const { page, limit, userId } = params
        const qs = new URLSearchParams()
        if (page) qs.set("page", page)
        if (limit) qs.set("limit", limit)
        if (userId) qs.set("userId", userId)
        return qs.toString()
          ? `/transactions?${qs.toString()}`
          : "/transactions"
      },
      providesTags: ["Billing"],
    }),
  }),
})

export const { useGetAllTransactionsQuery } = billingsApi

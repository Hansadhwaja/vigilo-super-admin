import { baseApi } from "@/store/api/baseApi"

export const billingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTransactions: builder.query({
      query: (params = {}) => {
        const { page, limit } = params
        const qs = new URLSearchParams()
        if (page) qs.set("page", page)
        if (limit) qs.set("limit", limit)
        return qs.toString()
          ? `/transactions?${qs.toString()}`
          : "/transactions"
      },
      providesTags: ["Billing"],
    }),
  }),
})

export const { useGetAllTransactionsQuery } = billingsApi

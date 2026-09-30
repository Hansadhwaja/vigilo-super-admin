import { baseApi } from "../baseApi"

export const enquiryApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEnquiries: builder.query({
      query: (params = {}) => {
        const { search, status, senderType, page, limit } = params
        const qs = new URLSearchParams()
        if (search) qs.set("search", search)
        if (status) qs.set("status", status)
        if (senderType) qs.set("senderType", senderType)
        if (page) qs.set("page", page)
        if (limit) qs.set("limit", limit)
        return qs.toString() ? `/enquiries?${qs.toString()}` : "/enquiries"
      },
      providesTags: ["Enquiry"],
    }),
    updateEnquiries: builder.mutation({
      query: ({ data, id }) => ({
        url: `/enquiries/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Enquiry"],
    }),
    deleteEnquiries: builder.mutation({
      query: (id) => ({
        url: `/enquiries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Enquiry"],
    }),
  }),
})

export const {
  useGetAllEnquiriesQuery,
  useUpdateEnquiriesMutation,
  useDeleteEnquiriesMutation,
} = enquiryApis

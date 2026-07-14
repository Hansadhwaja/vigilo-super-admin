import { baseApi } from "@/store/api/baseApi"

export const tenantsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCompanies: builder.query({
      query: (params = {}) => {
        const { search, status, plan, page, limit } = params
        const qs = new URLSearchParams()
        if (search) qs.set("search", search)
        if (status) qs.set("status", status)
        if (plan) qs.set("plan", plan)
        if (page) qs.set("page", page)
        if (limit) qs.set("limit", limit)
        return qs.toString()
          ? `/users/getAllCompanies?${qs.toString()}`
          : "/users/getAllCompanies"
      },
      providesTags: ["Tenants"],
    }),
    getCompanyById: builder.query({
      query: (id) => `/users/getCompanyById/${id}`,
      providesTags: ["Tenants"],
    }),
    createCompany: builder.mutation({
      query: (data) => ({
        url: "/users/createCompanyBySuperadmin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tenants"],
    }),
    updateCompany: builder.mutation({
      query: ({ data, id }) => ({
        url: `/users/updateCompany/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tenants"],
    }),
  }),
})

export const {
  useGetAllCompaniesQuery,
  useGetCompanyByIdQuery,
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
} = tenantsApi

import { baseApi } from "../baseApi"

export const plansApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPlan: builder.mutation({
      query: (data) => ({
        url: "/plans/createPlan",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Plans"],
    }),
    getPlans: builder.query({
      query: (params = {}) => {
        const { isActive } = params
        const qs = new URLSearchParams()
        if (isActive) qs.set("isActive", isActive)
        return qs.toString()
          ? `/plans/getPlans?${qs.toString()}`
          : "/plans/getPlans"
      },
      providesTags: ["Plans"],
    }),
    getPlanById: builder.query({
      query: (id) => `/plans/getPlanById/${id}`,
    }),
    togglePlanStatus: builder.mutation({
      query: (id) => ({
        url: `/plans/togglePlanStatus/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Plans"],
    }),
    updatePlan: builder.mutation({
      query: ({ id, data }) => ({
        url: `/plans/updatePlan/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Plans"],
    }),
  }),
})

export const {
  useCreatePlanMutation,
  useGetPlanByIdQuery,
  useGetPlansQuery,
  useTogglePlanStatusMutation,
  useUpdatePlanMutation,
} = plansApi

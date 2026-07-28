export interface UserProfile {
  id: string
  name: string
  email: string
  role: string
  companyAdminId: string | null
  avatar: string | null
  mobile: string | null
  countryCode: string | null
  address: string | null
  isVerified: boolean
  blocked: boolean
  notificationsEnabled: boolean
  planId: string | null
  stripeSubscriptionId: string | null
  subscriptionStatus: "active" | "inactive" | "canceled" | "trialing" | string
  subscriptionStart: string | null
  subscriptionEnd: string | null
  cancelAtPeriodEnd: boolean
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export interface GetProfileResponse {
  success: boolean
  message: string
  data: UserProfile
}

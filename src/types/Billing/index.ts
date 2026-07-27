export type Transaction = {
  id: string
  stripeInvoiceId: string
  stripePaymentIntentId: string | null
  subscriptionId: string
  userId: string
  amount: number
  currency: string
  status: "paid" | "pending" | "failed" | string
  description: string
  metadata: {
    invoice_number: string
    hosted_invoice_url: string
  }
  paidAt: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}

export type TransactionsResponse = {
  success: boolean
  count: number
  data: Transaction[]
}

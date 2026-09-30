export type TicketStatus = "open" | "inprogress" | "resolved"
export type SenderType = "company" | "website" | "guard"
export interface TicketUser {
  id: string
  name: string
  email: string
}

export interface Ticket {
  id: string
  name: string
  subject: string
  description: string
  status: TicketStatus
  senderType: SenderType
  userId: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  user: TicketUser | null
}

export interface TicketsResponse {
  success: boolean
  count: number
  data: Ticket[]
}

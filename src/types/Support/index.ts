export type Enquiry = {
  enquiryId: string
  senderType: "Company" | "Guard"
  name: string
  subject: string
  message: string
  status: "Open" | "In Progress" | "Resolved"
  createdDate: string
}

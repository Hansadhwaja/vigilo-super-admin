import type { Enquiry } from "@/types"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Receipt,
  BarChart3,
  Headset,
  FileText,
  ShieldCheck,
  Settings,
  Headphones,
} from "lucide-react"

export const navLinks = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: Users,
    label: "Tenants",
    link: "/tenants",
  },
  {
    icon: CreditCard,
    label: "Plans & Pricing",
    link: "/plans",
  },
  {
    icon: Receipt,
    label: "Billing & Subscriptions",
    link: "/billing",
  },
  {
    icon: BarChart3,
    label: "Usage & Analytics",
    link: "/analytics",
  },
  {
    icon: Headset,
    label: "Support & Enquiries",
    link: "/support",
  },
  {
    icon: FileText,
    label: "CMS",
    link: "/cms",
  },
  // {
  //   icon: ShieldCheck,
  //   label: "Platform Team",
  //   link: "/team",
  // },
  {
    icon: Settings,
    label: "Settings",
    link: "/settings",
  },
]

export const QUERY_KEYS = {
  SEARCH: "search",
  PAGE: "page",
  STATUS: "status",
  SORT: "sort",
} as const

export const roles = [
  {
    title: "Super Admin",
    description:
      "Full access to everything — tenants, billing, plans, settings, and team.",
    icon: ShieldCheck,
    color: "bg-violet-500/10 text-violet-500",
    features: [
      "Tenant Management",
      "Plans & Pricing",
      "Billing & Refunds",
      "Usage & Analytics",
      "CMS Management",
      "Platform Settings",
      "Team Management",
    ],
  },
  {
    title: "Billing Admin",
    description: "Manage subscriptions, billing, invoices, and pricing plans.",
    icon: CreditCard,
    color: "bg-blue-500/10 text-blue-500",
    features: [
      "Billing Dashboard",
      "Plans & Pricing",
      "Invoice Management",
      "Refund Processing",
      "Read-only Tenants",
    ],
  },
  {
    title: "Support Agent",
    description:
      "Assist customers, resolve issues, and manage support requests.",
    icon: Headphones,
    color: "bg-green-500/10 text-green-500",
    features: [
      "Support Tickets",
      "Customer Enquiries",
      "Tenant Impersonation",
      "Read-only Billing",
      "Knowledge Base",
    ],
  },
]

export const enquiries: Enquiry[] = [
  {
    enquiryId: "ENQ-001",
    senderType: "Company",
    name: "Allied Security",
    subject: "Billing Issue",
    message:
      "We were charged twice for the last billing cycle. Please review our account and process a refund.",
    status: "Open",
    createdDate: "Jun 12, 2026",
  },
  {
    enquiryId: "ENQ-002",
    senderType: "Guard",
    name: "Sarah Johnson",
    subject: "Login Issues",
    message:
      "I am unable to log into my account since yesterday. The app keeps showing an invalid credentials error.",
    status: "In Progress",
    createdDate: "Jun 13, 2026",
  },
  {
    enquiryId: "ENQ-003",
    senderType: "Company",
    name: "Metro Patrol Services",
    subject: "Feature Request",
    message:
      "Would it be possible to add bulk upload for guards via CSV? This would save our admin team significant time.",
    status: "Resolved",
    createdDate: "Jun 10, 2026",
  },
  {
    enquiryId: "ENQ-004",
    senderType: "Guard",
    name: "Mike Davis",
    subject: "Payment Delay",
    message:
      "My salary for March has not been processed yet. I have already informed my supervisor.",
    status: "Open",
    createdDate: "Jun 15, 2026",
  },
]

//Plans
export const billingIntervals = [
  {
    label: "Monthly",
    value: "month",
  },
  {
    label: "Yearly",
    value: "year",
  },
] as const

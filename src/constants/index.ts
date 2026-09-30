import type { TeamMember } from "@/types"
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

export const teamMembers: TeamMember[] = [
  {
    name: {
      avatar: "",
      initials: "SM",
      name: "Sophia Mendez",
      email: "sophia@vigilo.com",
    },
    role: "Super Admin",
    status: "Active",
    lastLogin: "2h ago",
  },
  {
    name: {
      avatar: "",
      initials: "JP",
      name: "James Park",
      email: "james@vigilo.com",
    },
    role: "Billing Admin",
    status: "Active",
    lastLogin: "7h ago",
  },
  {
    name: {
      avatar: "",
      initials: "RP",
      name: "Raj Patel",
      email: "raj@vigilo.com",
    },
    role: "Support Agent",
    status: "Active",
    lastLogin: "1d ago",
  },
  {
    name: {
      avatar: "",
      initials: "MA",
      name: "Mira Andersson",
      email: "mira@vigilo.com",
    },
    role: "Support Agent",
    status: "Active",
    lastLogin: "2d ago",
  },
  {
    name: {
      avatar: "",
      initials: "DK",
      name: "Daniel Kim",
      email: "daniel@vigilo.com",
    },
    role: "Billing Admin",
    status: "Invited",
    lastLogin: "—",
  },
  {
    name: {
      avatar: "",
      initials: "AB",
      name: "Aiyana Brooks",
      email: "aiyana@vigilo.com",
    },
    role: "Support Agent",
    status: "Disabled",
    lastLogin: "4mo ago",
  },
]

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

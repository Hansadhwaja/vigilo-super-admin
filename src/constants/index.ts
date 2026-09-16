import {
  LayoutDashboard,
  Users,
  CreditCard,
  Receipt,
  BarChart3,
  Headset,
  FileText,
  Settings,
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

export const enquiries = []

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

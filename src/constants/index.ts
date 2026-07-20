import type {
  Enquiry,
  TeamMember,
  Tenant,
  TopTenant,
  Transaction,
} from "@/types"
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
  {
    icon: ShieldCheck,
    label: "Platform Team",
    link: "/team",
  },
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

export const tenants: Tenant[] = [
  {
    id: "tenant-1",
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Acme Security",
    email: "admin@acme.com",
    mobile: "+1 202-555-0147",
    address: "120 Market Street, San Francisco, CA",
    subdomain: "acme",
    plan: "Enterprise",
    status: "Active",
    guards: 128,
    vehicles: 34,
    runs: 1245,
    mrr: 4999,
    lastActive: "2 mins ago",
    createdAt: "Jan 12, 2025",
  },
  {
    id: "tenant-2",
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Guardian Force",
    email: "hello@guardian.com",
    mobile: "+1 202-555-0182",
    address: "45 Madison Avenue, New York, NY",
    subdomain: "guardian",
    plan: "Pro",
    status: "Active",
    guards: 67,
    vehicles: 12,
    runs: 584,
    mrr: 2499,
    lastActive: "15 mins ago",
    createdAt: "Mar 3, 2025",
  },
  {
    id: "tenant-3",
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Night Watch",
    email: "support@nightwatch.com",
    mobile: "+1 202-555-0128",
    address: "890 Sunset Boulevard, Los Angeles, CA",
    subdomain: "nightwatch",
    plan: "Starter",
    status: "Inactive",
    guards: 22,
    vehicles: 5,
    runs: 138,
    mrr: 799,
    lastActive: "3 days ago",
    createdAt: "Jun 18, 2025",
  },
  {
    id: "tenant-4",
    avatar: "https://i.pravatar.cc/150?img=4",
    name: "ShieldOps",
    email: "team@shieldops.com",
    mobile: "+1 202-555-0164",
    address: "310 Lake Shore Drive, Chicago, IL",
    subdomain: "shieldops",
    plan: "Business",
    status: "Active",
    guards: 94,
    vehicles: 18,
    runs: 936,
    mrr: 3299,
    lastActive: "1 hour ago",
    createdAt: "Feb 8, 2025",
  },
  {
    id: "tenant-5",
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Secure Patrol",
    email: "contact@securepatrol.com",
    mobile: "+1 202-555-0196",
    address: "78 Main Street, Austin, TX",
    subdomain: "secure",
    plan: "Pro",
    status: "Suspended",
    guards: 51,
    vehicles: 9,
    runs: 401,
    mrr: 1899,
    lastActive: "5 days ago",
    createdAt: "Apr 14, 2025",
  },
]

export const topTenants: TopTenant[] = [
  {
    id: "tenant-1",
    rank: 1,
    company: {
      name: "Acme Security",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    plan: "Enterprise",
    patrolRuns: 1245,
    activeGuards: 128,
    alarms: 31,
  },
  {
    id: "tenant-2",
    rank: 2,
    company: {
      name: "ShieldOps",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    plan: "Business",
    patrolRuns: 936,
    activeGuards: 94,
    alarms: 24,
  },
  {
    id: "tenant-3",
    rank: 3,
    company: {
      name: "Guardian Force",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    plan: "Pro",
    patrolRuns: 584,
    activeGuards: 67,
    alarms: 18,
  },
  {
    id: "tenant-4",
    rank: 4,
    company: {
      name: "Secure Patrol",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    plan: "Pro",
    patrolRuns: 401,
    activeGuards: 51,
    alarms: 12,
  },
  {
    id: "tenant-5",
    rank: 5,
    company: {
      name: "Night Watch",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    plan: "Starter",
    patrolRuns: 138,
    activeGuards: 22,
    alarms: 5,
  },
]

export const transactions: Transaction[] = [
  {
    id: "TXN-1001",
    date: "26 Jun 2026",
    tenant: {
      avatar: "https://i.pravatar.cc/150?img=11",
      name: "Acme Security",
    },
    amount: 49,
    plan: "Pro",
    status: "Paid",
    method: "Card",
  },
  {
    id: "TXN-1002",
    date: "25 Jun 2026",
    tenant: {
      avatar: "https://i.pravatar.cc/150?img=12",
      name: "ShieldOps",
    },
    amount: 99,
    plan: "Business",
    status: "Paid",
    method: "UPI",
  },
  {
    id: "TXN-1003",
    date: "24 Jun 2026",
    tenant: {
      avatar: "https://i.pravatar.cc/150?img=13",
      name: "Night Watch",
    },
    amount: 19,
    plan: "Starter",
    status: "Pending",
    method: "Card",
  },
  {
    id: "TXN-1004",
    date: "23 Jun 2026",
    tenant: {
      avatar: "https://i.pravatar.cc/150?img=14",
      name: "Guardian Force",
    },
    amount: 499,
    plan: "Enterprise",
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: "TXN-1005",
    date: "22 Jun 2026",
    tenant: {
      avatar: "https://i.pravatar.cc/150?img=15",
      name: "Secure Patrol",
    },
    amount: 49,
    plan: "Pro",
    status: "Failed",
    method: "Card",
  },
]

export const revenueByPlan = [
  {
    plan: "Starter",
    revenue: 760,
  },
  {
    plan: "Pro",
    revenue: 1960,
  },
  {
    plan: "Business",
    revenue: 2970,
  },
  {
    plan: "Enterprise",
    revenue: 8420,
  },
]

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

//Analytics
export const patrolRunsData = [
  { date: "Jun 1", runs: 412 },
  { date: "Jun 2", runs: 438 },
  { date: "Jun 3", runs: 401 },
  { date: "Jun 4", runs: 465 },
  { date: "Jun 5", runs: 492 },
  { date: "Jun 6", runs: 478 },
  { date: "Jun 7", runs: 521 },
  { date: "Jun 8", runs: 548 },
  { date: "Jun 9", runs: 530 },
  { date: "Jun 10", runs: 562 },
  { date: "Jun 11", runs: 587 },
  { date: "Jun 12", runs: 603 },
  { date: "Jun 13", runs: 589 },
  { date: "Jun 14", runs: 615 },
  { date: "Jun 15", runs: 640 },
  { date: "Jun 16", runs: 626 },
  { date: "Jun 17", runs: 652 },
  { date: "Jun 18", runs: 674 },
  { date: "Jun 19", runs: 661 },
  { date: "Jun 20", runs: 690 },
  { date: "Jun 21", runs: 708 },
  { date: "Jun 22", runs: 694 },
  { date: "Jun 23", runs: 721 },
  { date: "Jun 24", runs: 742 },
  { date: "Jun 25", runs: 734 },
  { date: "Jun 26", runs: 756 },
  { date: "Jun 27", runs: 779 },
  { date: "Jun 28", runs: 768 },
  { date: "Jun 29", runs: 792 },
  { date: "Jun 30", runs: 815 },
]

export const alarmsByPriorityData = [
  { date: "Jun 1", p1: 5, p2: 12, p3: 18, p4: 25 },
  { date: "Jun 2", p1: 8, p2: 10, p3: 20, p4: 23 },
  { date: "Jun 3", p1: 4, p2: 15, p3: 16, p4: 28 },
  { date: "Jun 4", p1: 6, p2: 14, p3: 21, p4: 24 },
  { date: "Jun 5", p1: 7, p2: 13, p3: 22, p4: 27 },
  { date: "Jun 6", p1: 9, p2: 11, p3: 19, p4: 30 },
  { date: "Jun 7", p1: 5, p2: 16, p3: 24, p4: 26 },
  { date: "Jun 8", p1: 6, p2: 14, p3: 20, p4: 29 },
  { date: "Jun 9", p1: 8, p2: 13, p3: 23, p4: 31 },
  { date: "Jun 10", p1: 7, p2: 15, p3: 25, p4: 28 },
]

export const checkpointScanTimeData = [
  { date: "Jun 1", avgTime: 2.3, target: 2 },
  { date: "Jun 2", avgTime: 2.1, target: 2 },
  { date: "Jun 3", avgTime: 1.9, target: 2 },
  { date: "Jun 4", avgTime: 2.0, target: 2 },
  { date: "Jun 5", avgTime: 1.8, target: 2 },
  { date: "Jun 6", avgTime: 1.7, target: 2 },
  { date: "Jun 7", avgTime: 1.9, target: 2 },
  { date: "Jun 8", avgTime: 1.6, target: 2 },
  { date: "Jun 9", avgTime: 1.8, target: 2 },
  { date: "Jun 10", avgTime: 1.5, target: 2 },
]

export const missedCheckpointRateData = [
  { label: "Jun 1", rate: 2.8 },
  { label: "Jun 2", rate: 2.4 },
  { label: "Jun 3", rate: 2.1 },
  { label: "Jun 4", rate: 1.9 },
  { label: "Jun 5", rate: 2.3 },
  { label: "Jun 6", rate: 1.8 },
  { label: "Jun 7", rate: 1.5 },
  { label: "Jun 8", rate: 1.7 },
  { label: "Jun 9", rate: 1.4 },
  { label: "Jun 10", rate: 1.2 },
]

export const avgAlarmResponseTimeData = [
  { label: "Jun 1", responseTime: 8.4 },
  { label: "Jun 2", responseTime: 7.9 },
  { label: "Jun 3", responseTime: 8.2 },
  { label: "Jun 4", responseTime: 7.5 },
  { label: "Jun 5", responseTime: 7.1 },
  { label: "Jun 6", responseTime: 6.8 },
  { label: "Jun 7", responseTime: 7.3 },
  { label: "Jun 8", responseTime: 6.9 },
  { label: "Jun 9", responseTime: 6.5 },
  { label: "Jun 10", responseTime: 6.2 },
]

export const systemUptimeData = [
  { label: "Jun 1", uptime: 99.92, target: 99.9 },
  { label: "Jun 2", uptime: 99.95, target: 99.9 },
  { label: "Jun 3", uptime: 99.88, target: 99.9 },
  { label: "Jun 4", uptime: 99.93, target: 99.9 },
  { label: "Jun 5", uptime: 99.97, target: 99.9 },
  { label: "Jun 6", uptime: 99.91, target: 99.9 },
  { label: "Jun 7", uptime: 99.94, target: 99.9 },
  { label: "Jun 8", uptime: 99.98, target: 99.9 },
  { label: "Jun 9", uptime: 99.96, target: 99.9 },
  { label: "Jun 10", uptime: 99.99, target: 99.9 },
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

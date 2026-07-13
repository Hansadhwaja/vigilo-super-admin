import { createBrowserRouter } from "react-router"

import DashboardLayout from "@/layouts/DashboardLayout"

import LoginPage from "@/pages/auth/LoginPage"
import DashboardPage from "@/pages/dashboard"
import TenantsPage from "@/pages/tenants"
import PlansPage from "@/pages/plans"
import BillingPage from "@/pages/billing"
import AnalyticsPage from "@/pages/analytics"
import SupportPage from "@/pages/support"
import CMSPage from "@/pages/cms"
import TeamPage from "@/pages/team"
import SettingsPage from "@/pages/settings"
import GuestRoute from "@/components/Auth/GuestRoute"
import ProtectedRoute from "@/components/Auth/ProtectedRoute"

export const router = createBrowserRouter([
  {
    element: <GuestRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },
          {
            path: "/tenants",
            element: <TenantsPage />,
          },
          {
            path: "/plans",
            element: <PlansPage />,
          },
          {
            path: "/billing",
            element: <BillingPage />,
          },
          {
            path: "/analytics",
            element: <AnalyticsPage />,
          },
          {
            path: "/support",
            element: <SupportPage />,
          },
          {
            path: "/cms",
            element: <CMSPage />,
          },
          {
            path: "/team",
            element: <TeamPage />,
          },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
])
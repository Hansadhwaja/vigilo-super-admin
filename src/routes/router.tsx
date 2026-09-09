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
import SettingsPage from "@/pages/settings"
import TenantDetailsPage from "@/pages/tenants/TenantDetailsPage"
import ProfilePage from "@/pages/profile/ProfilePage"

import GuestRoute from "@/components/Auth/GuestRoute"
import ProtectedRoute from "@/components/Auth/ProtectedRoute"
import ErrorPage from "@/pages/error/ErrorPage"
import NotFoundPage from "@/pages/notfound/NotFoundPage"

export const router = createBrowserRouter([
  // Guest routes
  {
    element: <GuestRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  // Protected routes
  {
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },
          {
            path: "/tenants",
            children: [
              {
                index: true,
                element: <TenantsPage />,
              },
              {
                path: ":id",
                element: <TenantDetailsPage />,
              },
            ],
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
          // {
          //   path: "/team",
          //   element: <TeamPage />,
          // },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },

          // 404
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
])

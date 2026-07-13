import { Navigate, Outlet } from "react-router"

import { useAppSelector } from "@/store/hooks"

const GuestRoute = () => {
  const token = useAppSelector((state) => state.auth.token)

  if (token) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default GuestRoute
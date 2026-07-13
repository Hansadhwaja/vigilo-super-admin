import type { ReactNode } from "react"
import { useNavigate } from "react-router"
import { LogOut } from "lucide-react"
import { toast } from "sonner"

import { useAppDispatch } from "@/store/hooks"
import { clearCredentials } from "@/store/slices/auth/authSlice"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Props {
  children: ReactNode
}

const LogoutConfirmModal = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    dispatch(clearCredentials())

    toast.success("Logged out successfully")

    navigate("/login", { replace: true })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <LogOut className="size-5" />
          </div>

          <AlertDialogTitle>Log out of Vigilo?</AlertDialogTitle>

          <AlertDialogDescription>
            You will need to sign in again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction variant="destructive" onClick={handleLogout}>
            Log out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LogoutConfirmModal

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User } from "lucide-react"
import { Link } from "react-router"

import Loader from "../Common/Loader"
import LogoutConfirmModal from "../Auth/Modal/LogoutModal"
import CustomAvatar from "../Common/Avatar/CustomAvatar"
import { Button } from "../ui/button"

import { useGetProfileQuery } from "@/store/api/profile/profileApis"

const UserNav = () => {
  const { data, isLoading } = useGetProfileQuery(undefined)

  const user = data?.data

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isLoading}>
        <Button
          variant="ghost"
          aria-label="User menu"
          className="flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-accent"
        >
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <CustomAvatar src={user?.avatar} alt={user?.name ?? "User"} />

              <div className="hidden text-left lg:block">
                <p className="text-sm font-medium">{user?.name ?? "User"}</p>
                <p className="text-xs text-muted-foreground">
                  {user?.email ?? ""}
                </p>
              </div>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link to="/profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <LogoutConfirmModal>
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onSelect={(e) => e.preventDefault()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </LogoutConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav

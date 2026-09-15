import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { BadgeCheck } from "lucide-react"
import type { UserProfile } from "@/types"

interface Props {
  user: UserProfile
}

const ProfileHeader = ({ user }: Props) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <CustomAvatar
            src={user?.avatar ?? ""}
            alt={user?.name}
            className="h-20 w-20"
          />

          <div>
            <h2 className="text-2xl font-semibold">{user?.name}</h2>

            <p className="text-muted-foreground">{user?.email}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="capitalize">{user?.role}</Badge>

              {user?.isVerified && (
                <Badge variant="secondary" className="capitalize">
                  <BadgeCheck className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileHeader

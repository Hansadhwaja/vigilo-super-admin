import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import { Bell, ShieldCheck, XCircle } from "lucide-react"
import type { ReactNode } from "react"

import InfoRow from "./InfoRow"
import type { UserProfile } from "@/types"
import { formatDate } from "@/utils/date"

interface Props {
  user: UserProfile
}

const AccountDetails = ({ user }: Props) => {
  const accountItems: {
    label: string
    value: ReactNode
  }[] = [
    {
      label: "User ID",
      value: user.id,
    },
    {
      label: "Company Admin",
      value: user.companyAdminId ?? "-",
    },
    {
      label: "Notifications",
      value: user.notificationsEnabled ? (
        <Badge>
          <Bell className="mr-1 h-3 w-3" />
          Enabled
        </Badge>
      ) : (
        <Badge variant="secondary">Disabled</Badge>
      ),
    },
    {
      label: "Blocked",
      value: user.blocked ? (
        <Badge variant="destructive">
          <XCircle className="mr-1 h-3 w-3" />
          Yes
        </Badge>
      ) : (
        <Badge variant="secondary">
          <ShieldCheck className="mr-1 h-3 w-3" />
          No
        </Badge>
      ),
    },
    {
      label: "Created",
      value: formatDate(user.createdAt),
    },
    {
      label: "Updated",
      value: formatDate(user.updatedAt),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>

      <CardContent>
        {accountItems.map((item, index) => (
          <div key={item.label}>
            <InfoRow label={item.label} value={item.value} />
            {index < accountItems.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default AccountDetails

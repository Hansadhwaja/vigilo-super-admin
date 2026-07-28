import InfoRow from "./InfoRow"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { UserProfile } from "@/types"
import { formatDate } from "@/utils/date"
import type { ReactNode } from "react"

interface Props {
  user: UserProfile
}

const SubscriptionDetails = ({ user }: Props) => {
  const subscriptionItems: {
    label: string
    value: ReactNode
  }[] = [
    {
      label: "Status",
      value: <Badge className="capitalize">{user.subscriptionStatus}</Badge>,
    },
    {
      label: "Plan",
      value: user.planId ?? "-",
    },
    {
      label: "Start Date",
      value: formatDate(user.subscriptionStart),
    },
    {
      label: "End Date",
      value: formatDate(user.subscriptionEnd),
    },
    {
      label: "Auto Renew",
      value: user.cancelAtPeriodEnd ? (
        <Badge variant="destructive">Off</Badge>
      ) : (
        <Badge>On</Badge>
      ),
    },
    {
      label: "Subscription ID",
      value: (
        <span className="max-w-[220px] truncate">
          {user.stripeSubscriptionId ?? "-"}
        </span>
      ),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription</CardTitle>
      </CardHeader>

      <CardContent>
        {subscriptionItems.map((item, index) => (
          <div key={item.label}>
            <InfoRow label={item.label} value={item.value} />
            {index !== subscriptionItems.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default SubscriptionDetails

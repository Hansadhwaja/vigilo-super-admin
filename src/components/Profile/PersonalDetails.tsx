import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "../ui/separator"
import { Mail, MapPin, Phone, User } from "lucide-react"

import InfoRow from "./InfoRow"
import type { UserProfile } from "@/types"

interface Props {
  user: UserProfile
}

const PersonalDetails = ({ user }: Props) => {
  const personalItems: {
    label: string
    value: ReactNode
  }[] = [
    {
      label: "Name",
      value: (
        <span className="flex items-center gap-2">
          <User size={16} />
          {user.name}
        </span>
      ),
    },
    {
      label: "Email",
      value: (
        <span className="flex items-center gap-2">
          <Mail size={16} />
          {user.email}
        </span>
      ),
    },
    {
      label: "Mobile",
      value: (
        <span className="flex items-center gap-2">
          <Phone size={16} />
          {user.mobile ?? "-"}
        </span>
      ),
    },
    {
      label: "Address",
      value: (
        <span className="flex items-center gap-2">
          <MapPin size={16} />
          {user.address ?? "-"}
        </span>
      ),
    },
    {
      label: "Country Code",
      value: user.countryCode ?? "-",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>

      <CardContent>
        {personalItems.map((item, index) => (
          <div key={item.label}>
            <InfoRow label={item.label} value={item.value} />
            {index < personalItems.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default PersonalDetails

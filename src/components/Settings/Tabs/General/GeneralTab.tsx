"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GeneralForm from "./Form/GeneralForm"
import { useGetProfileQuery } from "@/store/api/profile/profileApis"
import GeneralTabSkeleton from "./Skeleton/GeneralTabSkeleton"

const GeneralTab = () => {
  const { data, isLoading } = useGetProfileQuery(undefined)

  const user = data?.data

  const handleSubmit = () => {}
  if (isLoading) return <GeneralTabSkeleton />

  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle>General Settings</CardTitle>

        <p className="text-sm text-muted-foreground">
          Configure your platform information, support details, and default
          preferences.
        </p>
      </CardHeader>

      <CardContent>
        <GeneralForm
          onSubmit={handleSubmit}
          isLoading={false}
          initialData={{
            platformName: user?.name ?? "",
            supportEmail: user.email ?? "",
            supportPhone: user.mobile ?? "",
          }}
        />
      </CardContent>
    </Card>
  )
}

export default GeneralTab

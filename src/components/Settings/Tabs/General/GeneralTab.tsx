"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GeneralForm from "./Form/GeneralForm"
import {
  useEditProfileMutation,
  useGetProfileQuery,
} from "@/store/api/profile/profileApis"
import GeneralTabSkeleton from "./Skeleton/GeneralTabSkeleton"
import type { GeneralSettingsFormValues } from "@/schemas/settings.schemas"
import { toast } from "sonner"

const GeneralTab = () => {
  const { data, isLoading } = useGetProfileQuery(undefined)

  const user = data?.data

  const [editProfile, { isLoading: isEditing }] = useEditProfileMutation()

  const handleSubmit = async (data: GeneralSettingsFormValues) => {
    try {
      await editProfile(data).unwrap()
      toast.success("Profile Edited Successfully")
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error?.message : "Error while editing profile"
      toast.error(message)
    }
  }
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
          isLoading={isEditing}
          initialData={{
            name: user?.name ?? "",
            email: user.email ?? "",
            mobile: user.mobile ?? "",
          }}
        />
      </CardContent>
    </Card>
  )
}

export default GeneralTab

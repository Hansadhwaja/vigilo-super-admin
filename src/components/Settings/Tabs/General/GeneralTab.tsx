"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GeneralForm from "./Form/GeneralForm"

const GeneralTab = () => {
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
        <GeneralForm />
      </CardContent>
    </Card>
  )
}

export default GeneralTab

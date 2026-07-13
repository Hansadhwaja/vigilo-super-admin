"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SecurityForm from "./Form/SecurityForm"

const SecurityTab = () => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>

        <p className="text-sm text-muted-foreground">
          Configure authentication, session management, and network access
          restrictions for your platform.
        </p>
      </CardHeader>

      <CardContent>
        <SecurityForm />
      </CardContent>
    </Card>
  )
}

export default SecurityTab

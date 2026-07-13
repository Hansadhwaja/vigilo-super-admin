"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import IntegrationCard from "./IntegrationCard"

const integrations = [
  {
    id: 1,
    title: "Stripe",
    description: "Billing & subscriptions",
    connected: true,
  },
  {
    id: 2,
    title: "SendGrid",
    description: "Transactional email",
    connected: true,
  },
  {
    id: 3,
    title: "Twilio",
    description: "SMS notifications",
    connected: false,
  },
  {
    id: 4,
    title: "Outbound Webhooks",
    description: "Platform event delivery",
    connected: true,
  },
]

const IntegrationsTab = () => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle>Integrations</CardTitle>

        <p className="text-sm text-muted-foreground">
          Connect third-party services used by your platform.
        </p>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {integrations.map((integration) => (
          <IntegrationCard
            key={integration.id}
            title={integration.title}
            description={integration.description}
            connected={integration.connected}
            onAction={() => console.log(integration.title)}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default IntegrationsTab

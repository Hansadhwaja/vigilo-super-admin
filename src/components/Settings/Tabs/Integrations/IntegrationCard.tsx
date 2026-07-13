"use client"

import { ArrowRight, CheckCircle2, PlugZap, XCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface IntegrationCardProps {
  title: string
  description: string
  connected: boolean
  onAction?: () => void
}

const IntegrationCard = ({
  title,
  description,
  connected,
  onAction,
}: IntegrationCardProps) => {
  return (
    <Card className="transition-all hover:shadow-sm">
      <CardContent className="flex items-center justify-between gap-6 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <PlugZap className="size-5 text-primary" />
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold">{title}</h3>

            <p className="text-sm text-muted-foreground">{description}</p>

            <Badge
              variant={connected ? "default" : "secondary"}
              className="mt-2 gap-1"
            >
              {connected ? (
                <CheckCircle2 className="size-3.5" />
              ) : (
                <XCircle className="size-3.5" />
              )}

              {connected ? "Connected" : "Not Connected"}
            </Badge>
          </div>
        </div>

        <Button variant={connected ? "outline" : "default"} onClick={onAction}>
          {connected ? "Reconnect" : "Connect"}

          <ArrowRight className="ml-2 size-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default IntegrationCard

"use client"

import { Mail, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface EmailTemplateCardProps {
  title: string
  trigger: string
  preview: string
  onEdit?: () => void
}

const EmailTemplateCard = ({
  title,
  trigger,
  preview,
  onEdit,
}: EmailTemplateCardProps) => {
  return (
    <Card className="transition-all hover:shadow-sm">
      <CardContent className="flex items-start justify-between gap-6 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Mail className="size-5 text-primary" />
          </div>

          <div className="space-y-2">
            <div>
              <h3 className="font-semibold">{title}</h3>

              <p className="text-sm text-muted-foreground">{trigger}</p>
            </div>

            <div className="rounded-lg bg-muted px-3 py-2">
              <p className="text-sm text-muted-foreground italic">
                {`"${preview}"`}
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onEdit}
          className="shrink-0"
        >
          <Pencil className="mr-2 size-4" />
          Edit
        </Button>
      </CardContent>
    </Card>
  )
}

export default EmailTemplateCard

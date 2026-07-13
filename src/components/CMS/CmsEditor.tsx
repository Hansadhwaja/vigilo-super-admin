

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface CmsEditorProps {
  title: string
  description: string
  children: ReactNode
  onSave?: () => void
  onReset?: () => void
  isSaving?: boolean
  saveButtonText?: string
}

const CmsEditor = ({
  title,
  description,
  children,
  onSave,
  onReset,
  isSaving = false,
  saveButtonText = "Save Changes",
}: CmsEditorProps) => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardContent className="space-y-8 p-8">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

          <p className="max-w-3xl text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Editor */}
        <div>{children}</div>

        {/* Actions */}
        <div className="flex justify-end gap-3 border-t pt-6">
          <Button variant="outline" onClick={onReset}>
            Reset
          </Button>

          <Button onClick={onSave} disabled={isSaving}>
            {isSaving ? "Saving..." : saveButtonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CmsEditor

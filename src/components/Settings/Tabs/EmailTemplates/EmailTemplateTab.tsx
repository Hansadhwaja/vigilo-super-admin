

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EmailTemplateCard from "./EmailTemplateCard"
import type { Template } from "@/types"


const templates: Template[] = [
  {
    id: 1,
    name: "Tenant Welcome",
    trigger: "Sent on tenant creation",
    preview: "Welcome to Vigilo! Your security operations platform is ready.",
  },
  {
    id: 2,
    name: "Trial Expiring",
    trigger: "7 days before trial ends",
    preview:
      "Your Vigilo trial ends in 7 days. Add payment to keep your data live.",
  },
  {
    id: 3,
    name: "Payment Failed",
    trigger: "On charge failure",
    preview:
      "We couldn't process your payment for [plan_name]. Please update your card.",
  },
  {
    id: 4,
    name: "Tenant Suspended",
    trigger: "After 3 failed attempts",
    preview: "Your Vigilo account has been suspended due to non-payment.",
  },
]

const handleEdit = (template: Template) => {
  console.log(template.name)
}

const EmailTemplatesTab = () => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle>Email Templates</CardTitle>

        <p className="text-sm text-muted-foreground">
          Manage the automated emails sent to tenants during important lifecycle
          events.
        </p>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {templates.map((template) => (
          <EmailTemplateCard
            key={template.id}
            title={template.name}
            trigger={template.trigger}
            preview={template.preview}
            onEdit={() => handleEdit(template)}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default EmailTemplatesTab

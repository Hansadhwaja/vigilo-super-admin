"use client"

import { Textarea } from "@/components/ui/textarea"
import CmsEditor from "../CmsEditor"

const PricingPolicySection = () => {
  return (
    <CmsEditor
      title="Pricing Policy"
      description="Manage your platform's pricing policy, billing information, and payment terms. This content will be displayed to users."
      onSave={() => console.log("Save Pricing Policy")}
      onReset={() => console.log("Reset Pricing Policy")}
    >
      <Textarea
        placeholder="Start writing your pricing policy..."
        className="min-h-125 resize-none"
      />
    </CmsEditor>
  )
}

export default PricingPolicySection

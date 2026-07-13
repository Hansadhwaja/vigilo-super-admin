"use client"

import { Textarea } from "@/components/ui/textarea"
import CmsEditor from "../CmsEditor"

const PrivacyPolicySection = () => {
  return (
    <CmsEditor
      title="Privacy Policy"
      description="Manage your platform's privacy policy. This content will be displayed to users throughout the application."
      onSave={() => console.log("Save")}
      onReset={() => console.log("Reset")}
    >
      <Textarea
        placeholder="Start writing your privacy policy..."
        className="min-h-125 resize-none"
      />
    </CmsEditor>
  )
}

export default PrivacyPolicySection

"use client";


import { Textarea } from "@/components/ui/textarea";
import CmsEditor from "../CmsEditor";

const TermsOfUseSection = () => {
  return (
    <CmsEditor
      title="Terms of Use"
      description="Manage the terms and conditions that govern the use of your platform. This content will be visible to all users."
      onSave={() => console.log("Save Terms of Use")}
      onReset={() => console.log("Reset Terms of Use")}
    >
      <Textarea
        placeholder="Start writing your terms of use..."
           className="min-h-125 resize-none"
      />
    </CmsEditor>
  );
};

export default TermsOfUseSection;
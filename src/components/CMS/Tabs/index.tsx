"use client"

import { ShieldCheck, FileText, BadgeDollarSign } from "lucide-react"

import TabList from "@/components/Common/Tabs/TabList"
import PrivacyPolicySection from "./PrivacyPolicySection"
import TermsOfUseSection from "./TermsOfUseSection"
import PricingPolicySection from "./PricingPolicySection"

const CmsTabs = () => {
  const tabs = [
    {
      value: "privacy-policy",
      label: "Privacy Policy",
      icon: ShieldCheck,
      content: <PrivacyPolicySection />,
    },
    {
      value: "terms-of-use",
      label: "Terms of Use",
      icon: FileText,
      content: <TermsOfUseSection />,
    },
    {
      value: "pricing-policy",
      label: "Pricing Policy",
      icon: BadgeDollarSign,
      content: <PricingPolicySection />,
    },
  ]
  return <TabList defaultValue="privacy-policy" tabs={tabs} />
}

export default CmsTabs

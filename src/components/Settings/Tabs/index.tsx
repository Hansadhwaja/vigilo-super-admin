"use client"

import { Settings, Mail, Shield, PlugZap } from "lucide-react"

import TabList from "@/components/Common/Tabs/TabList"
import GeneralTab from "./General/GeneralTab"
import EmailTemplateTab from "./EmailTemplates/EmailTemplateTab"
import SecurityTab from "./Security/SecurityTab"
import IntegrationsTab from "./Integrations/IntegrationsTab"

const SettingsTabs = () => {
  const tabs = [
    {
      value: "general",
      label: "General",
      icon: Settings,
      content: <GeneralTab />,
    },
    {
      value: "email-templates",
      label: "Email Templates",
      icon: Mail,
      content: <EmailTemplateTab />,
    },
    {
      value: "security",
      label: "Security",
      icon: Shield,
      content: <SecurityTab />,
    },
    {
      value: "integrations",
      label: "Integrations",
      icon: PlugZap,
      content: <IntegrationsTab />,
    },
  ]

  return <TabList defaultValue="general" tabs={tabs} />
}

export default SettingsTabs

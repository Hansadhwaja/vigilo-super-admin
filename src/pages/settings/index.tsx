import { PageHeader } from "@/components/Common/Header/PageHeader"
import GeneralTab from "@/components/Settings/Tabs/General/GeneralTab"

const SettingsPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Settings"
        description="Configure platform settings, preferences, and integrations."
      />
     <GeneralTab />
    </div>
  )
}

export default SettingsPage

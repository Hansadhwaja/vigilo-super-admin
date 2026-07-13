import { PageHeader } from "@/components/Common/Header/PageHeader"
import SettingsTabs from "@/components/Settings/Tabs"

const SettingsPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Settings"
        description="Configure platform settings, preferences, and integrations."
      />
      <SettingsTabs />
    </div>
  )
}

export default SettingsPage

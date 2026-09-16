import TabList, { type TabItem } from "@/components/Common/Tabs/TabList"
import OverviewTab from "./Overview/OverviewTab"
import type { Tenant } from "@/types"
import PlanTab from "./Plan/PlanTab"

interface Props {
  tenant: Tenant
}

const TenantDetailsTabs = ({ tenant }: Props) => {
  const tabs: TabItem[] = [
    {
      value: "overview",
      label: "Overview",
      content: <OverviewTab tenant={tenant} />,
    },
    {
      value: "plan-billing",
      label: "Plan & Billing",
      content: <PlanTab tenant={tenant} />,
    },
    {
      value: "users",
      label: "Users",
      content: <div>Users</div>,
    },
  ]
  return <TabList tabs={tabs} defaultValue="overview" />
}

export default TenantDetailsTabs

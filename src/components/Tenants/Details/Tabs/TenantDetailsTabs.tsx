import TabList, { type TabItem } from "@/components/Common/Tabs/TabList"

const tabs: TabItem[] = [
  {
    value: "overview",
    label: "Overview",
    content: <div>Overview</div>,
  },
  {
    value: "plan-billing",
    label: "Plan & Billing",
    content: <div>Plan & Billing</div>,
  },
  {
    value: "users",
    label: "Users",
    content: <div>Users</div>,
  },
  {
    value: "notes",
    label: "Notes",
    content: <div>Notes</div>,
  },
]

const TenantDetailsTabs = () => {
  return <TabList tabs={tabs} defaultValue="overview" />
}

export default TenantDetailsTabs
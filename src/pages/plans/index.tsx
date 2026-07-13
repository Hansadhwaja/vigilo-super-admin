import { PageHeader } from "@/components/Common/Header/PageHeader"
import AddPlanModal from "@/components/Plans/Modal/AddPlanModal"
import PlanList from "@/components/Plans/PlanList"


const PlansPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Plans & Pricing"
        description="Manage subscription plans and pricing."
        action={
          <AddPlanModal />
        }
      />
      <PlanList />
    </div>
  )
}

export default PlansPage
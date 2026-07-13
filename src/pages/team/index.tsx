import { PageHeader } from "@/components/Common/Header/PageHeader"
import InviteTeamModal from "@/components/Team/Modal/InviteTeamModal"
import RoleList from "@/components/Team/RoleList"
import PlatformTeamTable from "@/components/Team/Table"

const TeamPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Platform Team"
        description="Manage administrators, roles, permissions, and team members."
        action={<InviteTeamModal />}
      />
      <RoleList />
      <PlatformTeamTable />
    </div>
  )
}

export default TeamPage

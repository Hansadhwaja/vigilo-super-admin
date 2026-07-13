import { teamMembers } from "@/constants";
import { DataTable } from "@/components/ui/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "./columns";

const PlatformTeamTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Manage internal Vigilo staff with access to the admin portal.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <DataTable columns={columns} data={teamMembers} />
      </CardContent>
    </Card>
  );
};

export default PlatformTeamTable;
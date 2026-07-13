import { enquiries } from "@/constants";
import { DataTable } from "@/components/ui/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "./columns";

const SupportTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support Enquiries</CardTitle>
        <CardDescription>
          View and manage enquiries submitted by companies and guards.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <DataTable columns={columns} data={enquiries} />
      </CardContent>
    </Card>
  );
};

export default SupportTable;
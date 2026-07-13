
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Enquiry } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<Enquiry>[] = [
  {
    accessorKey: "enquiryId",
    header: "Enquiry ID",
  },
  {
    accessorKey: "senderType",
    header: "Sender",
    cell: ({ row }) => {
      const sender = row.original.senderType;

      return (
        <Badge variant="secondary">
          {sender}
        </Badge>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => (
      <span className="font-medium">
        {row.original.subject}
      </span>
    ),
  },
  {
    accessorKey: "message",
    header: "Message Preview",
    cell: ({ row }) => (
      <p className="max-w-xs truncate text-muted-foreground">
        {row.original.message}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <Badge
          variant={
            status === "Resolved"
              ? "default"
              : status === "In Progress"
              ? "secondary"
              : "destructive"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdDate",
    header: "Created",
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <Button variant="outline" size="sm">
        View
      </Button>
    ),
  },
];
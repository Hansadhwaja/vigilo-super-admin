import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import StatusBadge from "../Common/Badge/StatusBadge"
import type { Ticket } from "@/types"
import { useUpdateEnquiriesMutation } from "@/store/api/enquiry/enquiryApis"
import { toast } from "sonner"
import Loader from "../Common/Loader"

interface Props {
  ticket: Ticket
}

const ChangeStatus = ({ ticket }: Props) => {
  const [updateEnquiry, { isLoading }] = useUpdateEnquiriesMutation()

  const handleSubmit = async (status: string) => {
    try {
      const response = await updateEnquiry({
        id: ticket.id,
        data: {
          status,
        },
      }).unwrap()

      toast.success(response.message || "Status updated successfully")
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to update status"

      toast.error(message)
    }
  }
  return (
    <Select value={ticket.status} onValueChange={handleSubmit}>
      <SelectTrigger className="w-fit border-0 bg-transparent p-0 shadow-none focus:ring-0">
        {isLoading ? (
          <Loader />
        ) : (
          <SelectValue>
            <StatusBadge status={ticket.status} />
          </SelectValue>
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="open">Open</SelectItem>
        <SelectItem value="inprogress">In Progress</SelectItem>
        <SelectItem value="resolved">Resolved</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default ChangeStatus

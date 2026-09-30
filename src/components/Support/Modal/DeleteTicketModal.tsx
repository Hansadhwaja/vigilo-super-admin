import DeleteAlert from "@/components/Common/Alert/DeleteAlert"
import { useDeleteEnquiriesMutation } from "@/store/api/enquiry/enquiryApis"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  id: string
}

const DeleteTicketModal = ({ id }: Props) => {
  const [deleteEnquiry, { isLoading }] = useDeleteEnquiriesMutation()

  const handleDelete = async () => {
    try {
      const response = await deleteEnquiry(id).unwrap()

      toast.success(response.message || "Ticket deleted successfully")
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to delete ticket"

      toast.error(message)
    }
  }

  return (
    <DeleteAlert
      trigger={
        <Button variant="destructive" className="w-full">
          <Trash2 />
          Delete
        </Button>
      }
      onConfirm={handleDelete}
      title="Delete Ticket"
      description="Are you sure you want to delete this ticket? This action cannot be undone."
      confirmText="Delete"
      isLoading={isLoading}
    />
  )
}

export default DeleteTicketModal

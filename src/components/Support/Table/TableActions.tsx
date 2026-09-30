import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Ticket } from "@/types"
import DeleteTicketModal from "../Modal/DeleteTicketModal"
import ViewTicketModal from "../Modal/ViewTicketModal"

interface Props {
  ticket: Ticket
}

const TableActions = ({ ticket }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40 space-y-2">
        <DropdownMenuItem
          className="w-full p-0"
          onClick={(e) => e.preventDefault()}
        >
          <ViewTicketModal ticket={ticket} />
        </DropdownMenuItem>

        <DropdownMenuItem
          className="w-full p-0"
          onClick={(e) => e.preventDefault()}
        >
          <DeleteTicketModal id={ticket.id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TableActions

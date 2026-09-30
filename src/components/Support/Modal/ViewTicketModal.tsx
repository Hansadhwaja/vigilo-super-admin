import { CalendarDays, Eye, Mail, Send, User } from "lucide-react"

import StatusBadge from "@/components/Common/Badge/StatusBadge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { Ticket } from "@/types"
import { formatDate } from "@/utils/date"

interface Props {
  ticket: Ticket
}

const ViewTicketModal = ({ ticket }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full">
          <Eye />
          View
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-hidden p-0 sm:max-w-2xl">
        {/* Header */}
        <DialogHeader className="border-b px-6 py-5">
          <div className="flex items-start justify-between gap-4 pr-6">
            <div className="min-w-0 space-y-1">
              <DialogTitle className="text-lg font-semibold tracking-tight capitalize">
                {ticket.subject}
              </DialogTitle>

              <DialogDescription className="text-sm">
                Ticket details and message information
              </DialogDescription>
            </div>

            <StatusBadge status={ticket.status} />
          </div>
        </DialogHeader>

        <div className="max-h-[calc(90vh-130px)] overflow-y-auto">
          <div className="space-y-6 p-6">
            {/* Ticket Information */}
            <section>
              <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Ticket Information
              </p>

              <div className="grid overflow-hidden rounded-xl border bg-card sm:grid-cols-2">
                <InfoItem
                  icon={<User className="h-4 w-4" />}
                  label="Name"
                  value={ticket.name}
                />

                <InfoItem
                  icon={<Send className="h-4 w-4" />}
                  label="Sender"
                  value={ticket.senderType || "N/A"}
                />

                <InfoItem
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value={ticket.user?.email || "N/A"}
                />

                <InfoItem
                  icon={<CalendarDays className="h-4 w-4" />}
                  label="Created"
                  value={formatDate(ticket.createdAt)}
                />
              </div>
            </section>

            {/* Message */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Message
                </p>

                <span className="text-xs text-muted-foreground">
                  {ticket.description.length} characters
                </span>
              </div>

              <div className="h-40 overflow-y-auto rounded-xl border bg-muted/30 p-5">
                <p className="text-sm leading-7 whitespace-pre-wrap text-foreground/80">
                  {ticket.description}
                </p>
              </div>
            </section>

            {/* Footer metadata */}
            <div className="flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
              <span>Last updated {formatDate(ticket.updatedAt)}</span>

              <span className="font-mono">#{ticket.id.slice(0, 8)}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface InfoItemProps {
  icon: React.ReactNode
  label: string
  value?: string
}

const InfoItem = ({ icon, label, value }: InfoItemProps) => {
  return (
    <div className="flex min-w-0 items-start gap-3 border-b p-4 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>

        {value && <p className="mt-1 truncate text-sm font-medium">{value}</p>}
      </div>
    </div>
  )
}

export default ViewTicketModal

import Loader from "@/components/Common/Loader"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import type { ReactNode } from "react"

interface DeleteAlertProps {
  trigger: ReactNode
  onConfirm: () => void | Promise<void>
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  isLoading?: boolean
}

const DeleteAlert = ({
  trigger,
  onConfirm,
  title = "Delete Item",
  description = "This action cannot be undone. This will permanently delete this item.",
  confirmText = "Delete",
  cancelText = "Cancel",
  isLoading = false,
}: DeleteAlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-destructive">
            {title}
          </AlertDialogTitle>

          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>
            {cancelText}
          </AlertDialogCancel>

          <AlertDialogAction
            variant="destructive"
            onClick={(e) => {
              e.preventDefault()
              void onConfirm()
            }}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAlert

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
} from "@/components/ui/alert-dialog"

interface DeleteAlertProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void | Promise<void>
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  isLoading?: boolean
}

const DeleteAlert = ({
  open,
  onOpenChange,
  onConfirm,
  title = "Delete Item",
  description = "This action cannot be undone. This will permanently delete this item.",
  confirmText = "Delete",
  cancelText = "Cancel",
  isLoading = false,
}: DeleteAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
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
            variant={"destructive"}
            onClick={(e) => {
              e.preventDefault()
              void onConfirm()
            }}
            disabled={isLoading}
            className="text-destructive-foreground bg-destructive hover:bg-destructive/90"
          >
            {isLoading ? <Loader /> : confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAlert

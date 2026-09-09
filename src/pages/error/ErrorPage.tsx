import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const ErrorPage = () => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="size-8 text-destructive" />
        </div>

        <h1 className="text-2xl font-semibold tracking-tight">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          We encountered an unexpected error. Please try again or refresh the
          page.
        </p>

        <Button
          onClick={handleReload}
          className="mt-6"
        >
          <RefreshCw className="mr-2 size-4" />
          Try Again
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage
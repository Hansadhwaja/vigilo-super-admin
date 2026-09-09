import { ArrowLeft, Home } from "lucide-react"
import { Link, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <span className="text-7xl font-bold tracking-tight text-muted-foreground/30">
          404
        </span>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Page not found
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 size-4" />
            Go Back
          </Button>

          <Button asChild>
            <Link to="/">
              <Home className="mr-2 size-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

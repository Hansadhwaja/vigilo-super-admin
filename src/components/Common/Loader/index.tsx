import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface LoaderProps {
  className?: string
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className={cn("size-4 animate-spin", className)} />
    </div>
  )
}

export default Loader

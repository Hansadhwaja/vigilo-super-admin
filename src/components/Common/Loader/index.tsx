import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface LoaderProps {
  className?: string
}

const Loader = ({ className }: LoaderProps) => {
  return <Loader2 className={cn("size-4 animate-spin", className)} />
}

export default Loader

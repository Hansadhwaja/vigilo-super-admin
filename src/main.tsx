import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { RouterProvider } from "react-router"
import { router } from "./routes/router.tsx"
import StoreProvider from "./store/StoreProvider.tsx"
import { TooltipProvider } from "./components/ui/tooltip.tsx"
import { Toaster } from "@/components/ui/sonner.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <TooltipProvider>
          <RouterProvider router={router} />
          <Toaster richColors />
        </TooltipProvider>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
)

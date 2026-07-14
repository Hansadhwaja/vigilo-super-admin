"use client"

import { Eye } from "lucide-react"
import { Link } from "react-router"

import { Button } from "@/components/ui/button"

import EditTenantModal from "../Modal/EditTenantModal"

import type { Tenant } from "@/types"

interface Props {
  tenant: Tenant
}

const TenantActions = ({ tenant }: Props) => {
  return (
    <section className="flex items-center">
      <Button variant="ghost" size="icon" asChild>
        <Link to={`/tenants/${tenant.id}`} aria-label="View tenant">
          <Eye className="h-4 w-4" />
        </Link>
      </Button>

      <EditTenantModal tenant={tenant} />
    </section>
  )
}

export default TenantActions

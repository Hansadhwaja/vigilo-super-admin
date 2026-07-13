"use client";

import RoleCard from "./RoleCard"
import { roles } from "@/constants"

const RoleList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {roles.map((role) => (
        <RoleCard key={role.title} role={role} />
      ))}
    </div>
  )
}

export default RoleList

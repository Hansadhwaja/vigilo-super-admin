import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormField } from "@/components/Common/Form/FormField"
import Loader from "@/components/Common/Loader"

import {
  editTenantSchema,
  type EditTenantFormValues,
} from "@/schemas/tenants.schema"

import type { Tenant } from "@/types"

interface Props {
  onSubmit: (values: EditTenantFormValues) => void
  isLoading: boolean
  initialData: Tenant
}

const EditTenantForm = ({
  onSubmit,
  isLoading,
  initialData,
}: Props) => {
  const form = useForm<EditTenantFormValues>({
    resolver: zodResolver(editTenantSchema),
    mode: "onChange",
    defaultValues: {
      name: initialData.name ?? "",
      address: initialData.address ?? "",
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <FormField
        control={control}
        name="name"
        label="Company name"
        render={(field) => (
          <Input
            {...field}
            placeholder="Enter company name"
          />
        )}
      />

      <FormField
        control={control}
        name="address"
        label="Address"
        render={(field) => (
          <Textarea
            {...field}
            placeholder="Enter company address"
            className="resize-none"
          />
        )}
      />

      <Button
        type="submit"
        disabled={!isValid || isLoading}
        className="w-full"
      >
        {isLoading ? <Loader /> : "Update company"}
      </Button>
    </form>
  )
}

export default EditTenantForm
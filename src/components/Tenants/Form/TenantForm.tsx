import { useMemo } from "react"
import { type ControllerRenderProps, type Path, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PasswordInput from "@/components/Common/Input/PasswordInput"
import { FormField } from "@/components/Common/Form/FormField"
import Loader from "@/components/Common/Loader"

import { tenantSchema, type TenantFormValues } from "@/schemas/tenants.schema"

type TenantField = {
  name: Path<TenantFormValues>
  label: string
  render: (
    field: ControllerRenderProps<TenantFormValues, Path<TenantFormValues>>
  ) => React.ReactNode
}

interface Props {
  onSubmit: (values: TenantFormValues) => void
  isLoading: boolean
}

const TenantForm = ({ onSubmit, isLoading }: Props) => {
  const form = useForm<TenantFormValues>({
    resolver: zodResolver(tenantSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      mobile: "",
      address: "",
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form

  const onFormSubmit = async (values: TenantFormValues) => {
    try {
      await onSubmit(values)
    } catch (error) {
      console.error(error)
    }
  }

  const fields: TenantField[] = useMemo(
    () => [
      {
        name: "name",
        label: "Company name",
        render: (field) => (
          <Input {...field} placeholder="Enter company name" />
        ),
      },
      {
        name: "email",
        label: "Email address",
        render: (field) => (
          <Input {...field} type="email" placeholder="Enter email address" />
        ),
      },
      {
        name: "password",
        label: "Password",
        render: (field) => (
          <PasswordInput {...field} placeholder="Enter password" />
        ),
      },
      {
        name: "mobile",
        label: "Mobile number",
        render: (field) => (
          <Input {...field} type="tel" placeholder="Enter mobile number" />
        ),
      },
      {
        name: "address",
        label: "Address",
        render: (field) => (
          <Textarea
            {...field}
            placeholder="Enter company address"
            className="resize-none"
          />
        ),
      },
    ],
    []
  )

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
      {fields.map((field) => (
        <FormField
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          render={field.render}
        />
      ))}

      <Button type="submit" disabled={!isValid || isLoading} className="w-full">
        {isLoading ? <Loader /> : "Create company"}
      </Button>
    </form>
  )
}

export default TenantForm

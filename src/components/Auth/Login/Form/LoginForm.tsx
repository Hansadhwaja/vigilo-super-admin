import { useMemo } from "react"
import { type ControllerRenderProps, type Path, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PasswordInput from "@/components/Common/Input/PasswordInput"
import { FormField } from "@/components/Common/Form/FormField"
import Loader from "@/components/Common/Loader"
import { loginSchema, type LoginFormValues } from "@/schemas/auth.schemas"

type LoginField = {
  name: Path<LoginFormValues>
  label: string
  render: (
    field: ControllerRenderProps<LoginFormValues, Path<LoginFormValues>>
  ) => React.ReactNode
}

interface Props {
  onSubmit: (values: LoginFormValues) => void
  isLoading: boolean
}

const LoginForm = ({ onSubmit, isLoading }: Props) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form

  const onFormSubmit = async (values: LoginFormValues) => {
    try {
      await onSubmit(values)
    } catch (error) {
      console.error(error)
    }
  }

  const fields: LoginField[] = useMemo(
    () => [
      {
        name: "email",
        label: "Email address",
        render: (field) => (
          <Input {...field} type="email" placeholder="Enter your email" />
        ),
      },
      {
        name: "password",
        label: "Password",
        render: (field) => (
          <PasswordInput {...field} placeholder="Enter your password" />
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
        {isLoading ? <Loader /> : "Sign in"}
      </Button>
    </form>
  )
}

export default LoginForm

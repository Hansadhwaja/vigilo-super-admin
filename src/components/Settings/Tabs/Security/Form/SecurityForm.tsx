
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {  securitySchema, type SecurityFormValues } from "@/schemas/settings.schemas"

const defaultValues: SecurityFormValues = {
  sessionTimeout: 60,
  require2FA: true,
  restrictByIp: true,
  allowedIps: `10.0.4.0/24
192.168.20.10`,
}

const SecurityForm = () => {
  const form = useForm<SecurityFormValues>({
    resolver: zodResolver(securitySchema),
    defaultValues,
  })

  const { control, handleSubmit, formState } = form

  const onSubmit = (values: SecurityFormValues) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet className="space-y-8">
        <FieldGroup className="">
          <Controller
            control={control}
            name="sessionTimeout"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Session Timeout (minutes)</FieldLabel>

                <FieldContent>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />

          <Controller
            control={control}
            name="require2FA"
            render={({ field }) => (
              <Field orientation="horizontal">
                <div className="space-y-1">
                  <FieldLabel>
                    Require 2FA for all Super Admin accounts
                  </FieldLabel>

                  <FieldDescription>
                    Recommended for production.
                  </FieldDescription>
                </div>

                <FieldContent>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FieldContent>
              </Field>
            )}
          />

          <Controller
            control={control}
            name="restrictByIp"
            render={({ field }) => (
              <Field orientation="horizontal">
                <div className="space-y-1">
                  <FieldLabel>Restrict access by IP allowlist</FieldLabel>

                  <FieldDescription>
                    Only allow Super Admin Portal logins from approved IPs.
                  </FieldDescription>
                </div>

                <FieldContent>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FieldContent>
              </Field>
            )}
          />

          <Controller
            control={control}
            name="allowedIps"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Allowed IPs (one per line)</FieldLabel>

                <FieldContent>
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder={`10.0.4.0/24\n192.168.20.10`}
                    disabled={!control._formValues.restrictByIp}
                  />

                  <FieldDescription>
                    Supports individual IPs and CIDR ranges.
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-end border-t pt-6">
          <Button type="submit" disabled={formState.isSubmitting}>
            Save Changes
          </Button>
        </div>
      </FieldSet>
    </form>
  )
}

export default SecurityForm

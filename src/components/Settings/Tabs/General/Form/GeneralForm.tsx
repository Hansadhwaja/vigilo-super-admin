"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  generalSettingsSchema,
  type GeneralSettingsFormValues,
} from "@/schemas/settings.schemas"

const defaultValues: GeneralSettingsFormValues = {
  platformName: "Vigilo",
  supportEmail: "support@vigilo.com",
  supportPhone: "+1 (800) 555-0143",
  timezone: "UTC",
  currency: "USD",
}

const GeneralForm = () => {
  const { control, handleSubmit, reset, formState } =
    useForm<GeneralSettingsFormValues>({
      resolver: zodResolver(generalSettingsSchema),
      defaultValues,
    })

  const onSubmit = (data: GeneralSettingsFormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet className="space-y-6">
        <FieldGroup className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Controller
            control={control}
            name="platformName"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Platform Name</FieldLabel>

                <FieldContent>
                  <Input {...field} placeholder="Platform name" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />

          <Controller
            control={control}
            name="supportEmail"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Support Email</FieldLabel>

                <FieldContent>
                  <Input
                    {...field}
                    type="email"
                    placeholder="support@example.com"
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
            name="supportPhone"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Support Phone</FieldLabel>

                <FieldContent>
                  <Input {...field} placeholder="+1 (800) 555-0143" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />

          <Controller
            control={control}
            name="timezone"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Default Timezone</FieldLabel>

                <FieldContent>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="Asia/Kolkata">Asia/Kolkata</SelectItem>
                      <SelectItem value="America/New_York">
                        America/New_York
                      </SelectItem>
                      <SelectItem value="Europe/London">
                        Europe/London
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />

          <Controller
            control={control}
            name="currency"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Default Currency</FieldLabel>

                <FieldContent>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="INR">INR</SelectItem>
                      <SelectItem value="AED">AED</SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-end gap-3 border-t pt-6">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>

          <Button type="submit" disabled={formState.isSubmitting}>
            Save Changes
          </Button>
        </div>
      </FieldSet>
    </form>
  )
}

export default GeneralForm

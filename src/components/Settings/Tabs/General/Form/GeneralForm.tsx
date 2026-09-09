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
  generalSettingsSchema,
  type GeneralSettingsFormValues,
} from "@/schemas/settings.schemas"

interface Props {
  initialData: GeneralSettingsFormValues
  onSubmit: (v: GeneralSettingsFormValues) => void
  isLoading: boolean
}

const GeneralForm = ({ initialData, onSubmit, isLoading }: Props) => {
  const defaultValues: GeneralSettingsFormValues = {
    platformName: initialData?.platformName ?? "",
    supportEmail: initialData?.supportEmail ?? "",
    supportPhone: initialData?.supportPhone ?? "",
  }
  const form = useForm<GeneralSettingsFormValues>({
    resolver: zodResolver(generalSettingsSchema),
    defaultValues,
  })

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = form

  const onFormSubmit = (data: GeneralSettingsFormValues) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <FieldSet className="space-y-6">
        <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </FieldGroup>

        <div className="flex justify-end gap-3 border-t pt-6">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>

          <Button type="submit" disabled={isLoading || !isValid}>
            Save Changes
          </Button>
        </div>
      </FieldSet>
    </form>
  )
}

export default GeneralForm

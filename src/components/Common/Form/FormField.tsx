import {
  Controller,
  type Control,
  type ControllerRenderProps,
  type FieldValues,
  type FieldPath,
} from "react-hook-form"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"

interface FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>
  name: TName
  label: string
  render: (field: ControllerRenderProps<TFieldValues, TName>) => React.ReactNode
}

export function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ control, name, label, render }: FormFieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>{label}</FieldLabel>

          {render(field)}

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

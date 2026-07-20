import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Trash2 } from "lucide-react"

import { planSchema, type PlanFormValues } from "@/schemas/plans.schema"

import Loader from "@/components/Common/Loader"
import { FormField } from "@/components/Common/Form/FormField"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FieldGroup } from "@/components/ui/field"
import type { Plan } from "@/types"
import { billingIntervals } from "@/constants"

export type CreatePlanPayload = Omit<PlanFormValues, "features"> & {
  features: string[]
}

interface Props {
  onSubmit: (values: CreatePlanPayload) => void | Promise<void>
  isLoading?: boolean
  initialData: Plan
}

const PlanForm = ({ onSubmit, isLoading = false, initialData }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<PlanFormValues>({
    resolver: zodResolver(planSchema),
    mode: "onChange",
    defaultValues: {
      name: initialData?.name ?? "",
      description: initialData?.description ?? "",
      interval: initialData?.interval ?? "month",
      amount: initialData?.amount ?? 0,
      features: initialData?.features.map((f) => ({
        value: f,
      })) ?? [{ value: "" }],
    },
  })

  const {
    fields: featureFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "features",
  })

  const onFormSubmit = async (values: PlanFormValues) => {
    await onSubmit({
      ...values,
      features: values.features.map((feature) => feature.value),
    })
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
      <FormField
        control={control}
        name="name"
        label="Plan Name"
        render={(field) => <Input {...field} placeholder="Enter plan name" />}
      />

      <FormField
        control={control}
        name="description"
        label="Description"
        render={(field) => (
          <Textarea
            {...field}
            placeholder="Enter description"
            className="resize-none"
          />
        )}
      />
      <FieldGroup className="grid grid-cols-2">
        <FormField
          control={control}
          name="interval"
          label="Billing Interval"
          render={(field) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select billing interval" />
              </SelectTrigger>

              <SelectContent>
                {billingIntervals.map((interval) => (
                  <SelectItem key={interval.value} value={interval.value}>
                    {interval.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <FormField
          control={control}
          name="amount"
          label="Amount"
          render={(field) => (
            <Input
              type="number"
              placeholder="Enter amount"
              value={field.value}
              onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
            />
          )}
        />
      </FieldGroup>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Features</h3>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ value: "" })}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Feature
          </Button>
        </div>

        <div className="grid grid-cols-2 space-y-4">
          {featureFields.map((feature, index) => (
            <div key={feature.id} className="flex items-start gap-2">
              <div className="flex-1">
                <FormField
                  control={control}
                  name={`features.${index}.value`}
                  label={`Feature ${index + 1}`}
                  render={(field) => (
                    <Input {...field} placeholder="Enter feature" />
                  )}
                />
              </div>

              {featureFields.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="mt-8"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={!isValid || isLoading}>
        {isLoading ? <Loader /> : initialData?"Update Plan":"Create Plan"}
      </Button>
    </form>
  )
}

export default PlanForm

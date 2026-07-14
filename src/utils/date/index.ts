// utils/date.utils.ts

import { format, formatDistanceToNow, isValid } from "date-fns"

type DateValue = string | number | Date | null | undefined

const parseDate = (value: DateValue): Date | null => {
  if (value === null || value === undefined || value === "") {
    return null
  }

  const date = new Date(value)

  return isValid(date) ? date : null
}

export const formatDate = (value: DateValue): string => {
  const date = parseDate(value)

  return date ? format(date, "dd MMM yyyy") : "-"
}

export const formatTime = (value: DateValue): string => {
  const date = parseDate(value)

  return date ? format(date, "hh:mm a") : "-"
}

export const formatDateTime = (value: DateValue): string => {
  const date = parseDate(value)

  return date ? format(date, "dd MMM yyyy, hh:mm a") : "-"
}

export const formatRelativeTime = (value: DateValue): string => {
  const date = parseDate(value)

  return date
    ? formatDistanceToNow(date, { addSuffix: true })
    : "-"
}
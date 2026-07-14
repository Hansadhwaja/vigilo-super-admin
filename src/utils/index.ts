export const displayValue = (value: unknown): string => {
  if (value === null || value === undefined || value === "") {
    return "-"
  }

  return String(value)
}

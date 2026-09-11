export const displayValue = (value: unknown): string => {
  if (value === null || value === undefined || value === "") {
    return "-"
  }

  return String(value)
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

export const formatCurrency = (
  value: number,
  currency = "USD",
  locale = "en-US"
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

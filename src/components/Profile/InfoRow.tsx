const InfoRow = ({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) => (
  <div className="flex items-center justify-between py-3">
    <p className="text-sm text-muted-foreground">{label}</p>
    <div className="text-sm font-medium">{value}</div>
  </div>
)

export default InfoRow

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const StatCardSkeleton = () => {
  return (
    <Card className="p-0">
      <CardContent className="flex items-center justify-between p-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-7 w-16" />
        </div>

        <Skeleton className="size-9 rounded-lg" />
      </CardContent>
    </Card>
  )
}

const ChartSkeleton = () => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="px-4 py-4 sm:px-6">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-64 max-w-full" />
      </CardHeader>

      <CardContent className="px-2 pb-4 sm:px-6 sm:pb-6">
        <Skeleton className="h-[250px] w-full rounded-md sm:h-[300px] lg:h-[350px]" />
      </CardContent>
    </Card>
  )
}

const UsageStatsSkeleton = () => {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-36" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

const PlanDistributionSkeleton = () => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="px-4 py-4 sm:px-6">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-4 w-64 max-w-full" />
      </CardHeader>

      <CardContent className="flex items-center justify-center px-4 pb-6 sm:px-6">
        <Skeleton className="size-[220px] rounded-full sm:size-[260px]" />
      </CardContent>
    </Card>
  )
}

const RecentTenantSkeleton = () => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="px-4 py-4 sm:px-6">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-4 w-56 max-w-full" />
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4"
            >
              {/* Avatar */}
              <Skeleton className="size-9 shrink-0 rounded-full sm:size-10" />

              {/* Tenant information */}
              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-32 max-w-[55%]" />
                  <Skeleton className="h-4 w-14 shrink-0 rounded-full" />
                </div>

                <Skeleton className="h-3 w-28 max-w-[45%]" />
              </div>

              {/* Registration time */}
              <Skeleton className="h-3 w-10 shrink-0" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const DashboardSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <Skeleton className="h-7 w-32 sm:h-8" />
        <Skeleton className="h-4 w-80 max-w-full" />
      </div>

      {/* Main Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>

      {/* Usage Stats */}
      <UsageStatsSkeleton />

      {/* Growth Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>

      {/* Plan Distribution + Recent Tenants */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentTenantSkeleton />
        </div>
        <div className="xl:col-span-1">
          <PlanDistributionSkeleton />
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeleton

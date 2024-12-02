import { RecentActivities } from "@/components/dashboard/activities/recent-activites";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { StatsGrid } from "@/components/dashboard/stats/StatsGrid";
import { UpcomingEvents } from "@/components/dashboard/upcoming-events";
import { PageLayout } from "@/components/layout/PageLayout";

export default function DashboardPage() {
  return (
    <PageLayout
      title="Dashboard"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]}
    >
      <div className="space-y-6">
        <StatsGrid />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-4">
            <QuickActions />
            <OverviewChart />
          </div>
          <UpcomingEvents />
        </div>
        <RecentActivities />
      </div>
    </PageLayout>
  );
}

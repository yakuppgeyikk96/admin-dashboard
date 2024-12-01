import { OverviewChart } from "@/components/dashboard/chart/overview-chart";
import { StatsGrid } from "@/components/dashboard/stats/StatsGrid";
import { PageLayout } from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout
      title="Dashboard"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]}
    >
      <StatsGrid />
      <OverviewChart />
    </PageLayout>
  );
}

import { Users, UserCheck, UserPlus, Activity } from "lucide-react";
import { StatCard } from "@/components/common/stat-card";

export function UserStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Users"
        value="2,420"
        description="Total registered users"
        icon={Users}
        trend={{
          value: 12,
          isPositive: true,
        }}
      />
      <StatCard
        title="Active Users"
        value="1,850"
        description="Users with active status"
        icon={UserCheck}
        trend={{
          value: 8,
          isPositive: true,
        }}
      />
      <StatCard
        title="New Users"
        value="245"
        description="New users this month"
        icon={UserPlus}
        trend={{
          value: 2.5,
          isPositive: false,
        }}
      />
      <StatCard
        title="Online Now"
        value="142"
        description="Currently active users"
        icon={Activity}
      />
    </div>
  );
}

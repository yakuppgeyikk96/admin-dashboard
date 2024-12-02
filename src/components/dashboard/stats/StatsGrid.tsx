"use client";

import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import { StatCard } from "./StatCard";

export const StatsGrid = () => {
  const stats = [
    {
      title: "Total Users",
      value: 2850,
      description: "Active Users",
      trend: { value: 12, isPositive: true },
      icon: Users,
    },
    {
      title: "Total Revenue",
      value: 45231,
      description: "Last 30 days",
      trend: { value: 8, isPositive: true },
      icon: DollarSign,
      isCurrency: true,
    },
    {
      title: "Active Orders",
      value: 126,
      description: "Processing Orders",
      trend: { value: 3, isPositive: false },
      icon: ShoppingCart,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      description: "Last 7 days",
      trend: { value: 5, isPositive: true },
      icon: Activity,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

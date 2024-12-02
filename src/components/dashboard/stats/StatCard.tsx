"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/ui/counter";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: LucideIcon;
  isCurrency?: boolean;
}

export const StatCard = ({
  title,
  value,
  description,
  trend,
  icon: Icon,
  isCurrency,
}: StatCardProps) => {
  const isNumeric =
    typeof value === "number" || !isNaN(parseFloat(value.toString()));
  const numericValue = isNumeric
    ? parseFloat(value.toString().replace(/[^0-9.-]+/g, ""))
    : 0;

  return (
    <Card className="animate-in fade-in-50 slide-in-from-bottom-6 duration-500">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="animate-in zoom-in-50 duration-500">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isCurrency && "$"}
          {isNumeric ? <Counter value={numericValue} /> : value}
        </div>
        {(description || trend) && (
          <div className="flex items-center gap-2 animate-in fade-in-50 slide-in-from-left duration-500">
            {trend && (
              <div
                className={cn(
                  "flex items-center text-xs",
                  trend.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {trend.isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {trend.value}%
              </div>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// user-filters.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { UserFiltersState } from "./types";
import { USER_ROLES, USER_STATUS } from "./constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function UserFilters({
  onFilterChange,
}: {
  onFilterChange: (filters: UserFiltersState) => void;
}) {
  const [filters, setFilters] = useState<UserFiltersState>({
    search: "",
    role: [],
    status: [],
    startDate: "",
    endDate: "",
  });

  const handleFilterChange = (newFilters: Partial<UserFiltersState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    const resetFilters: UserFiltersState = {
      search: "",
      role: [],
      status: [],
      startDate: "",
      endDate: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-start">
          <div className="sm:col-span-2 lg:col-span-2">
            <Input
              placeholder="Search users..."
              value={filters.search}
              onChange={(e) => handleFilterChange({ search: e.target.value })}
              className="w-full no-focus [&:not(:focus)]:border-input"
            />
          </div>

          <div className="lg:col-span-1">
            <Select
              value={filters.role.join(",")}
              onValueChange={(value) =>
                handleFilterChange({ role: value ? value.split(",") : [] })
              }
            >
              <SelectTrigger className="w-full no-focus [&:not(:focus)]:border-input">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent className="select-content">
                {USER_ROLES.map((role) => (
                  <SelectItem
                    key={role.value}
                    value={role.value}
                    className="select-item"
                  >
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="lg:col-span-1">
            <Select
              value={filters.status.join(",")}
              onValueChange={(value) =>
                handleFilterChange({ status: value ? value.split(",") : [] })
              }
            >
              <SelectTrigger className="w-full no-focus [&:not(:focus)]:border-input">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="select-content">
                {USER_STATUS.map((status) => (
                  <SelectItem
                    key={status.value}
                    value={status.value}
                    className="select-item"
                  >
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <Input
              type="date"
              placeholder="Start date"
              value={filters.startDate}
              onChange={(e) =>
                handleFilterChange({ startDate: e.target.value })
              }
              className="w-full no-focus [&:not(:focus)]:border-input [&::-webkit-calendar-picker-indicator]:text-foreground [&::-webkit-calendar-picker-indicator]:dark:invert"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <Input
              type="date"
              placeholder="Endt date"
              value={filters.endDate}
              onChange={(e) => handleFilterChange({ endDate: e.target.value })}
              className="w-full no-focus [&:not(:focus)]:border-input [&::-webkit-calendar-picker-indicator]:text-foreground [&::-webkit-calendar-picker-indicator]:dark:invert"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <Button
              variant="outline"
              onClick={handleReset}
              className="w-full no-focus [&:not(:focus)]:border-input"
            >
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

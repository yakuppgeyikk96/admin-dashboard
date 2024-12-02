"use client";

import { useState, useMemo, useEffect } from "react";
import { UserFilters } from "./user-filters";
import { UserTable } from "./user-table";
import type { User, UserFiltersState } from "./types";
import { USER_LIST } from "./constants";
import { CreateUserModal } from "./create-user-modal";

export default function UserListPage() {
  const [filters, setFilters] = useState<UserFiltersState>({
    search: "",
    role: [],
    status: [],
    startDate: "",
    endDate: "",
  });
  const [users, setUsers] = useState<User[]>([]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (
        filters.search &&
        !user.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !user.email.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }
      if (filters.role.length > 0 && !filters.role.includes(user.role)) {
        return false;
      }
      if (filters.status.length > 0 && !filters.status.includes(user.status)) {
        return false;
      }
      if (filters.startDate) {
        const userCreatedAt = new Date(user.createdAt);
        const filterStartDate = new Date(filters.startDate);
        if (userCreatedAt < filterStartDate) return false;
      }
      if (filters.endDate) {
        const userCreatedAt = new Date(user.createdAt);
        const filterEndDate = new Date(filters.endDate);
        if (userCreatedAt > filterEndDate) return false;
      }
      return true;
    });
  }, [users, filters]);

  useEffect(() => {
    setUsers(USER_LIST);
  }, []);

  return (
    <>
      <UserFilters onFilterChange={setFilters} />

      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <CreateUserModal />
        </div>
        <div className="border rounded-lg">
          <UserTable users={filteredUsers} />
        </div>
      </div>
    </>
  );
}

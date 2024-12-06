"use client";

import { useState, useMemo, useEffect } from "react";
import { UserFilters } from "./user-filters";
import type { User, UserFiltersState } from "./types";
import { USER_LIST, USER_TABLE_COLUMNS } from "./constants";
import { CreateUserModal } from "./create-user-modal";
import { DataTable } from "@/components/common/data-table";
import { UserActions } from "./user-actions";
import { UserStats } from "../stats";

export default function UserListPage() {
  const [filters, setFilters] = useState<UserFiltersState>({
    search: "",
    role: [],
    status: [],
    startDate: "",
    endDate: "",
  });
  const [users, setUsers] = useState<User[]>([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
    total: 20,
  });

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: newPage,
    }));
  };

  // Event handlers
  const handleEdit = (user: User) => {
    console.log("Edit user:", user);
    // Edit modal'ı açılacak veya edit sayfasına yönlendirilecek
  };

  const handleDelete = async (user: User) => {
    try {
      // API call ile silme işlemi
      console.log("Delete user:", user);
      // Başarılı silme sonrası kullanıcı listesi güncellenecek
    } catch (error) {
      // Hata yönetimi
      console.error("Error deleting user:", error);
    }
  };

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
      <div className="flex flex-col gap-6">
        <UserStats />
        <div className="flex flex-col gap-8">
          <UserFilters onFilterChange={setFilters} />

          <div className="flex flex-col gap-2">
            <div className="flex justify-end">
              <CreateUserModal />
            </div>
            <DataTable
              data={filteredUsers}
              columns={USER_TABLE_COLUMNS}
              pagination={{
                pageSize: pagination.pageSize,
                pageIndex: pagination.pageIndex,
                total: pagination.total,
                onPageChange: handlePageChange,
              }}
              actions={(row) => (
                <UserActions
                  user={row}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

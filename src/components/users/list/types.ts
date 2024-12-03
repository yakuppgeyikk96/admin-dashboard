export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "editor";
  status: "active" | "inactive";
  createdAt: string;
  lastLogin: string;
}

export interface UserFiltersState {
  search: string;
  role: string[];
  status: string[];
  startDate: string;
  endDate: string;
}

interface PaginationState {
  pageSize: number;
  pageIndex: number;
  total: number;
}

export interface UserTableProps {
  users: User[];
  pagination: PaginationState;
  onPaginationChange: (page: number) => void;
}

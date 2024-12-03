import { Column } from "@/types/table";
import { User } from "./types";

export const USER_ROLES = [
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
  { label: "Editor", value: "editor" },
];

export const USER_STATUS = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

export const USER_LIST: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-01-01",
    lastLogin: "2024-03-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "inactive",
    createdAt: "2024-02-15",
    lastLogin: "2024-02-28",
  },
  {
    id: "3",
    name: "Tommy Davis",
    email: "tommy.davis@example.com",
    role: "editor",
    status: "active",
    createdAt: "2024-02-15",
    lastLogin: "2024-02-28",
  },
];

export const USER_TABLE_COLUMNS: Column<User>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    type: "text",
  },
  {
    id: "email",
    header: "Email",
    accessorKey: "email",
    type: "text",
  },
  {
    id: "role",
    header: "Role",
    accessorKey: "role",
    type: "badge",
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    type: "badgeStatus",
  },
  {
    id: "createdAt",
    header: "Created At",
    accessorKey: "createdAt",
    type: "date",
  },
  {
    id: "lastLogin",
    header: "Last Login",
    accessorKey: "lastLogin",
    type: "date",
  },
];

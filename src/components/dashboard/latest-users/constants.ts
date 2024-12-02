import { User } from "./types";

export const LATEST_USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    joinedAt: new Date("2024-02-01T10:00:00"),
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    joinedAt: new Date("2024-02-01T09:30:00"),
    status: "active",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    joinedAt: new Date("2024-02-01T09:00:00"),
    status: "offline",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    joinedAt: new Date("2024-02-01T08:30:00"),
    status: "active",
  },
];

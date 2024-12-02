import { Activity } from "./types";

export const activities: Activity[] = [
  {
    id: "1",
    user: "John Doe",
    action: "Created new account",
    status: "success",
    date: new Date("2024-02-01T08:00:00"),
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "Updated profile",
    status: "success",
    date: new Date("2024-02-01T09:30:00"),
  },
  {
    id: "3",
    user: "Bob Johnson",
    action: "Failed login attempt",
    status: "error",
    date: new Date("2024-02-01T10:15:00"),
  },
  {
    id: "4",
    user: "Alice Brown",
    action: "Processing payment",
    status: "pending",
    date: new Date("2024-02-01T11:00:00"),
  },
];

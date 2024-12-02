import { Activity } from "./types";

export const getStatusColor = (status: Activity["status"]) => {
  switch (status) {
    case "success":
      return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
    case "pending":
      return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
    case "error":
      return "bg-destructive/10 text-destructive hover:bg-destructive/20";
  }
};

export interface Activity {
  id: string;
  user: string;
  action: string;
  status: "success" | "pending" | "error";
  date: Date;
}

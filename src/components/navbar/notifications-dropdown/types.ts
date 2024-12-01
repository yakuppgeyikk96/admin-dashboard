export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "message" | "alert" | "update";
  isRead: boolean;
  date: string;
}

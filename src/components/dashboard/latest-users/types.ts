export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Editor";
  joinedAt: Date;
  avatar?: string;
  status: "active" | "offline";
}

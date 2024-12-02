export interface Event {
  id: string;
  title: string;
  date: Date;
  type: "meeting" | "deadline" | "reminder";
  description?: string;
  participants?: string[];
}

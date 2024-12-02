import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Event } from "./types";

export const EventItem = ({
  title,
  date,
  type,
  description,
  participants,
}: Event) => (
  <div className="flex flex-col space-y-2 border-b last:border-0 py-3">
    <div className="flex items-center justify-between">
      <span className="font-medium">{title}</span>
      <span
        className={cn(
          "text-xs px-2 py-1 rounded-full",
          type === "meeting" && "bg-blue-500/10 text-blue-500",
          type === "deadline" && "bg-red-500/10 text-red-500",
          type === "reminder" && "bg-yellow-500/10 text-yellow-500"
        )}
      >
        {type}
      </span>
    </div>
    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-1" />
        {format(date, "MMM dd")}
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-1" />
        {format(date, "HH:mm")}
      </div>
    </div>
    {description && (
      <p className="text-sm text-muted-foreground">{description}</p>
    )}
    {participants && participants.length > 0 && (
      <div className="flex items-center space-x-1">
        {participants.map((participant) => (
          <div
            key={participant}
            className="text-xs bg-secondary px-2 py-1 rounded-full"
          >
            {participant}
          </div>
        ))}
      </div>
    )}
  </div>
);

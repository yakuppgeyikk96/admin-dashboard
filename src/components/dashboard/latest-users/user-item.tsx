import { formatDistanceToNow } from "date-fns";
import { User } from "./types";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const UserItem = ({ name, email, role, joinedAt, status }: User) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "text-xs px-2.5 py-0.5 rounded-full font-medium",
            role === "Admin" && "bg-blue-500/10 text-blue-500",
            role === "Editor" && "bg-purple-500/10 text-purple-500",
            role === "User" && "bg-slate-500/10 text-slate-500"
          )}
        >
          {role}
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className={cn(
              "h-2 w-2 rounded-full",
              status === "active" ? "bg-green-500" : "bg-slate-300"
            )}
          />
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(joinedAt, { addSuffix: true })}
          </span>
        </div>
      </div>
    </div>
  );
};

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Bell, MessageCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Notification } from "./types";
import { useTheme } from "@/context/theme-context";

const notifications: Notification[] = [
  {
    id: "1",
    title: "New Message",
    message: "You have a new message from John Doe",
    type: "message",
    isRead: false,
    date: "2024-02-20T10:00:00",
  },
  {
    id: "2",
    title: "System Update",
    message: "System will be updated in 2 hours",
    type: "update",
    isRead: true,
    date: "2024-02-20T09:30:00",
  },
  {
    id: "3",
    title: "Alert",
    message: "Unusual login attempt detected",
    type: "alert",
    isRead: false,
    date: "2024-02-20T09:00:00",
  },
];

export const NotificationsDropdown = () => {
  const { theme } = useTheme();
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "message":
        return <MessageCircle className="w-4 h-4" />;
      case "alert":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "update":
        return <RefreshCw className="w-4 h-4 text-blue-500" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        <div className="p-2 hover:bg-accent-orange/10 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={`w-80 ${theme}`}
        align="end"
        alignOffset={0}
        sideOffset={8}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <span className="font-medium">Notifications</span>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-auto">
              {unreadCount} new
            </Badge>
          )}
        </div>

        <ScrollArea className="h-[400px]">
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className={cn(
                "px-4 py-3 cursor-pointer hover:bg-accent-orange/5",
                !notification.isRead && "bg-accent-orange/5"
              )}
            >
              <div className="flex items-start w-full gap-3">
                <div className="pt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-medium truncate">
                      {notification.title}
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDistanceToNow(new Date(notification.date), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {notification.message}
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </ScrollArea>

        <div className="p-2 border-t">
          <button className="w-full px-4 py-2 text-sm text-center text-accent-orange hover:bg-accent-orange/10 rounded-md transition-colors">
            View all notifications
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

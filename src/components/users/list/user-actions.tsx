import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Edit,
  Trash,
  UserCog,
  Ban,
  CheckCircle,
} from "lucide-react";
import type { User } from "./types";

export function UserActions({ user }: { user: User }) {
  const handleEdit = () => {
    console.log("Edit user:", user);
  };

  const handlePermissions = () => {
    console.log("Edit permissions for user:", user);
  };

  const handleStatusChange = () => {
    const newStatus = user.status === "active" ? "inactive" : "active";
    console.log("Change status for user:", user.id, "to:", newStatus);
  };

  const handleDelete = () => {
    console.log("Delete user:", user);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          Edit User
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handlePermissions}>
          <UserCog className="mr-2 h-4 w-4" />
          Permissions
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleStatusChange}>
          {user.status === "active" ? (
            <>
              <Ban className="mr-2 h-4 w-4" />
              Deactivate
            </>
          ) : (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Activate
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDelete}
          className="text-destructive focus:text-destructive"
        >
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

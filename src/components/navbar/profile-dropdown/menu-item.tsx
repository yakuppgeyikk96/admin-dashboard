import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { type ProfileMenuItem } from "./types";

export const MenuItem = ({
  icon: Icon,
  label,
  onClick,
  variant = "default",
}: ProfileMenuItem) => (
  <DropdownMenuItem
    onClick={onClick}
    className={`
      cursor-pointer transition-colors duration-200
      ${
        variant === "destructive"
          ? "focus:bg-destructive focus:text-destructive-foreground"
          : "focus:bg-accent"
      }
    `}
  >
    <Icon className="w-4 h-4 mr-2" />
    {label}
  </DropdownMenuItem>
);

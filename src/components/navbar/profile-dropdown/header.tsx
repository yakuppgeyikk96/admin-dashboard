import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { type ProfileData } from "./types";

export const Header = ({ name, email }: ProfileData) => (
  <DropdownMenuLabel className="flex flex-col space-y-1">
    <p className="text-sm font-medium leading-none">{name}</p>
    <p className="text-xs leading-none text-muted-foreground">{email}</p>
  </DropdownMenuLabel>
);

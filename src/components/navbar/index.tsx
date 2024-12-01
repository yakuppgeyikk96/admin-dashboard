import { ToggleButton } from "./toggle-button";
import { ThemeToggle } from "./theme-toggle";
import { ProfileDropdown } from "./profile-dropdown";
import { profileData, profileMenuItems } from "@/config/profile";
import { NotificationsDropdown } from "./notifications-dropdown";
import { SearchTrigger } from "./search/trigger";
import { useSearch } from "@/context/search-context";
import { SearchCommand } from "./search/command";

const Navbar = () => {
  const { handleOpen } = useSearch();

  return (
    <nav className="h-16 border-b border-border bg-background px-4">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <ToggleButton />
          <SearchTrigger onClick={handleOpen} />
        </div>
        <div className="flex items-center gap-4">
          <NotificationsDropdown />
          <ThemeToggle />
          <ProfileDropdown profile={profileData} menuItems={profileMenuItems} />
        </div>
      </div>
      <SearchCommand />
    </nav>
  );
};

export default Navbar;

import SidebarSwitcher from "../elements/SidebarSwitcher";
import ThemeSwitcher from "../elements/ThemeSwitcher";

export default function Topbar() {
  return (
    <section className="flex justify-between items-center h-full px-8">
      <section>
        <SidebarSwitcher />
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </section>
  );
}

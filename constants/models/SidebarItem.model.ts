

interface ISidebarItem {
  id: string;
  title: string;
  href?: string;
  icon?: string;
  basepath?: string;
  children?: ISidebarItem[];
}

export default ISidebarItem;
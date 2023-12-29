
import ISidebarItem from "./models/SidebarItem.model";

const sidebarItems: ISidebarItem[] = [
  {
    id: '6ce1718f-d630-49c2-94bf-50a6eb07a08f',
    title: 'Home',
    basepath: '/',
    icon: "Home",
  },
  {
    id: 'd2952489-e679-40ea-aafc-ef6d16ba14e0',
    title: 'Products',
    basepath: '/products',
    icon: "Package",
    children: [
      {
        id: 'd62f690c-85ba-4bfe-89e3-dbb3c761fe0e',
        title: 'All products',
        href: '/products/all',
      },
      {
        id: '195cd673-c8b5-43f3-b712-4bd87a4844d3',
        title: 'Add product',
        href: '/products/add',
      },
    ]
  }
];

export default sidebarItems;
export const styles = {
  base: "flex items-center transition-all duration-200 group relative rounded-lg",

  layout: {
    expanded: "pl-4 pr-2 py-2",
    collapsed: "mx-[-0.5rem] px-3 py-2",
  },

  states: {
    active: [
      "bg-accent-orange/10", // Açık turuncu arka plan
      "text-accent-orange", // Koyu turuncu text
    ].join(" "),
    inactive: [
      "text-sidebar-muted",
      "hover:bg-sidebar-hover hover:text-sidebar-foreground",
    ].join(" "),
  },

  icon: {
    base: "w-5 h-5 min-w-[20px] min-h-[20px]",
    active: "text-accent-orange", // İkon da koyu turuncu olsun
    inactive: "text-sidebar-muted",
  },

  label: {
    base: "ml-3 overflow-hidden whitespace-nowrap",
    expanded: "opacity-100 w-auto",
    collapsed: "opacity-0 w-0",
  },

  submenu: {
    wrapper: [
      "overflow-hidden transition-all duration-300",
      "relative ml-5",
    ].join(" "),

    item: [
      "pl-[26px]",
      "text-sidebar-muted",
      "transition-opacity duration-300",
      "hover:text-sidebar-foreground/90 hover:bg-sidebar hover:font-bold",
    ].join(" "),

    activeItem: [
      "text-accent-orange",
      "font-bold",
      "hover:text-accent-orange",
    ].join(" "),

    popup: [
      "absolute left-full top-0 ml-2",
      "bg-sidebar rounded-lg p-2 min-w-[200px]",
      "shadow-lg",
      "animate-in slide-in 0.2s ease-out",
    ].join(" "),
  },

  tooltip: [
    "absolute left-full ml-2",
    "px-2 py-1",
    "bg-sidebar",
    "rounded-md",
    "invisible opacity-0",
    "group-hover:visible group-hover:opacity-100",
    "transition-all",
    "whitespace-nowrap",
    "text-sidebar-foreground",
  ].join(" "),
};

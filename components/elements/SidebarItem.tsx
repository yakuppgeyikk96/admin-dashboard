"use client";

import ISidebarItem from "@/constants/models/SidebarItem.model";
import generateIcon from "@/utils/generateIcon";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  item: ISidebarItem;
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname();
  const Icon = item.icon && generateIcon(item.icon);

  console.log(pathname);

  const ifPathnameIncludes = (basepath: string | undefined) => {
    if (basepath === "/") {
      return pathname === basepath;
    }
    return basepath && pathname.includes(basepath);
  };

  const generateSidebarItem = (item: ISidebarItem) => {
    if (item.children && item.children.length) {
      return (
        <li
          key={item.id}
          className={`cursor-pointer rounded-md gap-3 hover:bg-sidebar-item-active ${
            ifPathnameIncludes(item.basepath)
              ? "bg-sidebar-item-active"
              : "text-font-primary-clr"
          }`}
        >
          <Link
            className="flex gap-2 items-center py-3 px-2 font-bold"
            href={(item.children && item.children[0].href) || "/"}
          >
            {Icon ? <Icon size={20} /> : <></>}
            <p className="flex-grow">{item.title}</p>
            {ifPathnameIncludes(item.basepath) ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </Link>
          {ifPathnameIncludes(item.basepath) ? (
            <ul>
              {item.children.map((subItem) => generateSidebarItem(subItem))}
            </ul>
          ) : null}
        </li>
      );
    }

    return (
      <li key={item.id} className="flex flex-col items-center rounded-md">
        <Link
          key={item.id}
          href={item.href || "/"}
          className={`w-full flex gap-2 items-center hover:bg-sidebar-item-active hover:rounded-md ${
            item.icon ? "px-2 py-3 font-bold" : "pl-10 pb-3"
          } ${
            ifPathnameIncludes(item.basepath)
              ? "rounded-md bg-sidebar-item-active"
              : "text-font-primary-clr"
          }`}
        >
          {Icon ? <Icon size={20} /> : <></>}
          <div
            className={
              !item.icon
                ? `${
                    pathname === item.href
                      ? "font-semibold text-white"
                      : "font-semibold text-font-primary-clr"
                  }`
                : ""
            }
          >
            {item.title}
          </div>
        </Link>
      </li>
    );
  };

  return generateSidebarItem(item);
}

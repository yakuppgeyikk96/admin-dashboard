import React from "react";
import SidebarLayout from "./SidebarLayout";
import HeaderLayout from "./HeaderLayout";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <section className={`flex w-full dark`}>
      <SidebarLayout />
      <section className="flex-grow">
        <HeaderLayout />
        {children}
      </section>
    </section>
  );
}

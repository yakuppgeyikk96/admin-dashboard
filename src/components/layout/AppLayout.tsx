// components/layout/AppLayout.tsx
"use client";

import { useTheme } from "@/context/theme-context";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { PageLoading } from "../loading/page-loading";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) {
    return <PageLoading />;
  }

  return (
    <div className={cn("flex h-screen", theme === "dark" ? "dark" : "")}>
      <Sidebar />
      <div className="flex flex-col flex-1 bg-background text-foreground">
        <Navbar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}

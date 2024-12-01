import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/theme-context";
import AppLayout from "@/components/layout/AppLayout";
import { SearchProvider } from "@/context/search-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider>
          <SearchProvider>
            <SidebarProvider>
              <AppLayout>{children}</AppLayout>
            </SidebarProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

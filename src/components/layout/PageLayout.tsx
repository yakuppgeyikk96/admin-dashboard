import { cn } from "@/lib/utils";
import Breadcrumb from "@/components/common/breadcrumb";
import { BreadcrumbItem } from "../common/breadcrumb/types";

interface PageLayoutProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  className?: string;
}

export const PageLayout = ({
  title,
  breadcrumbs,
  children,
  className,
}: PageLayoutProps) => {
  return (
    <div className="space-y-6 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
      </div>
      <div className={cn("flex flex-col gap-8", className)}>{children}</div>
    </div>
  );
};

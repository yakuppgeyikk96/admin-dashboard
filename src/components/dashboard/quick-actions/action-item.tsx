import Link from "next/link";
import { cn } from "@/lib/utils";
import { QuickAction } from "./types";

export const QuickActionItem = ({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
}: QuickAction) => (
  <Link
    href={href}
    className={cn(
      "flex items-center space-x-4 rounded-lg border p-4",
      "transition-all hover:bg-accent"
    )}
  >
    <div className={cn("rounded-lg p-2", bgColor)}>
      <Icon className={cn("h-6 w-6", color)} />
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </Link>
);

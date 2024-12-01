import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { BreadcrumbProps } from "./types";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {index === items.length - 1 ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : item.href ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            // href yoksa normal text
            <span className="text-muted-foreground">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TableProps, Column } from "@/types/table";

export function DataTable<T extends { id: string }>({
  data,
  columns,
  pagination,
  actions,
}: TableProps<T>) {
  const renderCell = (row: T, column: Column<T>) => {
    if (column.cell) {
      return column.cell(row);
    }

    const value = row[column.accessorKey];

    switch (column.type) {
      case "badge":
        return <Badge variant="outline">{String(value)}</Badge>;

      case "badgeStatus":
        return (
          <Badge
            className={cn(
              "bg-opacity-10 border-0 pointer-events-none",
              String(value).toLowerCase() === "active"
                ? "bg-emerald-500 text-emerald-500"
                : "bg-orange-500 text-orange-500"
            )}
          >
            {String(value)}
          </Badge>
        );

      case "date":
        return new Date(String(value)).toLocaleDateString();

      default:
        return String(value);
    }
  };

  return (
    <>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className={cn(column.align === "right" && "text-right")}
                >
                  {column.header}
                </TableHead>
              ))}
              {actions && <TableHead className="text-right">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell
                    key={`${row.id}-${column.id}`}
                    className={cn(column.align === "right" && "text-right")}
                  >
                    {renderCell(row, column)}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell className="text-right">{actions(row)}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {pagination && (
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-muted-foreground">
            Showing {pagination.pageIndex * pagination.pageSize + 1} -{" "}
            {Math.min(
              (pagination.pageIndex + 1) * pagination.pageSize,
              pagination.total
            )}{" "}
            of {pagination.total} entries
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    pagination.onPageChange(pagination.pageIndex - 1)
                  }
                  disabled={pagination.pageIndex === 0}
                  className="h-8 w-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </PaginationItem>

              {[
                ...Array(Math.ceil(pagination.total / pagination.pageSize)),
              ].map((_, idx) => (
                <PaginationItem key={idx}>
                  <Button
                    variant={
                      pagination.pageIndex === idx ? "default" : "outline"
                    }
                    size="icon"
                    onClick={() => pagination.onPageChange(idx)}
                    className="h-8 w-8"
                  >
                    {idx + 1}
                  </Button>
                </PaginationItem>
              ))}

              <PaginationItem>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    pagination.onPageChange(pagination.pageIndex + 1)
                  }
                  disabled={
                    pagination.pageIndex ===
                    Math.ceil(pagination.total / pagination.pageSize) - 1
                  }
                  className="h-8 w-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}

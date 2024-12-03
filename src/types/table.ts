export type CellType = "text" | "badge" | "date" | "actions" | "badgeStatus";

export interface Column<T> {
  id: string;
  header: string;
  accessorKey: keyof T;
  type?: CellType;
  align?: "left" | "center" | "right";
  cell?: (row: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  pagination?: {
    pageSize: number;
    pageIndex: number;
    total: number;
    onPageChange: (page: number) => void;
  };
  actions?: (row: T) => React.ReactNode;
}

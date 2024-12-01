// src/components/loading/page-loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const PageLoading = () => {
  return (
    <div className="flex h-screen bg-[hsl(215,25%,12%)]">
      {/* Sidebar Skeleton */}
      <div className="w-64 p-4 border-r border-[hsl(217,32%,17%)]">
        {/* Logo area */}
        <Skeleton className="h-8 w-32 mb-8 bg-[hsl(217,32%,17%)]" />

        {/* Nav items */}
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full bg-[hsl(217,32%,17%)]" />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Navbar Skeleton */}
        <div className="h-16 border-b border-[hsl(217,32%,17%)] p-4 flex items-center justify-between">
          <Skeleton className="h-8 w-8 bg-[hsl(217,32%,17%)]" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-8 bg-[hsl(217,32%,17%)]" />
            <Skeleton className="h-8 w-8 rounded-full bg-[hsl(217,32%,17%)]" />
          </div>
        </div>

        {/* Main content Skeleton */}
        <div className="flex-1 p-4">
          <div className="space-y-4">
            <Skeleton className="h-8 w-48 bg-[hsl(217,32%,17%)]" />
            <Skeleton className="h-32 w-full bg-[hsl(217,32%,17%)]" />
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-24 w-full bg-[hsl(217,32%,17%)]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

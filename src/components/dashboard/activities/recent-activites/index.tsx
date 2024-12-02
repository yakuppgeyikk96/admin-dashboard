import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { activities } from "./constants";
import { cn } from "@/lib/utils";
import { getStatusColor } from "./utils";

export const RecentActivities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "w-fit px-2 py-1 rounded-md font-medium",
                      getStatusColor(activity.status)
                    )}
                  >
                    {activity.status}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {formatDistanceToNow(activity.date, { addSuffix: true })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

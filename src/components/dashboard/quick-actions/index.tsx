import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QUICK_ACTIONS } from "./constants";
import { QuickActionItem } from "./action-item";

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {QUICK_ACTIONS.map((action) => (
            <QuickActionItem key={action.title} {...action} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LATEST_USERS } from "./constants";
import { UserItem } from "./user-item";

export const LatestUsers = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {LATEST_USERS.map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

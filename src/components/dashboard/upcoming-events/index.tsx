// src/components/dashboard/upcoming-events/index.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UPCOMING_EVENTS } from "./constants";
import { EventItem } from "./event-item";

export const UpcomingEvents = () => {
  return (
    <Card className="h-[824px] overflow-y-auto">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        {UPCOMING_EVENTS.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </CardContent>
    </Card>
  );
};

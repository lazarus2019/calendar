import { CalendarEvent } from "@/types";
import { addDays, subDays } from "@/utils/date-helper";

export const mockEvents: CalendarEvent[] = [
  {
    date: subDays(new Date(), 6),
    title: "Post video",
  },
  {
    date: addDays(new Date(), 1),
    title: "Add hygen to project",
  },
  {
    date: subDays(new Date(), 3),
    title: "Edit video",
  },
  {
    date: addDays(new Date(), 2),
    title: "Planning PCalendar project",
  },
];

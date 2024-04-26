import { CalendarEvent } from "@/types";
import { addManipulateDate, subManipulateDate } from "@/utils/date-helper";

export const mockEvents: CalendarEvent[] = [
  {
    date: addManipulateDate(new Date(), 10),
    title: "Post video",
  },
  {
    date: addManipulateDate(new Date(), 1),
    title: "Add hygen to project",
  },
  {
    date: subManipulateDate(new Date(), 3),
    title: "Edit video",
  },
  {
    date: addManipulateDate(new Date(), 2),
    title: "Planning PCalendar project",
  },
];

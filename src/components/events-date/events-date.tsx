import styles from "./events-date.module.scss";

import { CalendarEvent } from "@/types";

import { Dayjs } from "dayjs";

interface EventsDateProps {
  events: CalendarEvent[];
  dateValue: Dayjs;
}

function EventsDate({ events, dateValue }: EventsDateProps) {
  if (events.length === 0) return null;

  const eventsOfDate = events.filter(event => event.date.isSame(dateValue, "date"));

  if (eventsOfDate.length === 0) return null;

  return (
    <div className={styles["events-date"]}>
      <span className={styles["events-tooltip-btn"]} />

      <ul className={styles["events-tooltip-content"]}>
        {eventsOfDate.map(event => (
          <li key={`${event.date}-${event.title}`} className={styles["events-tooltip-item"]}>
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsDate;

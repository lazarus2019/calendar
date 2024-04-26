import styles from "./days-in-month.module.scss";

import EventsDate from "@/components/events-date";
import { CalendarDate, CalendarEvent } from "@/types";

import clsx from "clsx";
import { Dayjs } from "dayjs";

interface DaysInMonthProps {
  listDays: CalendarDate[];
  currentDate: Dayjs;
  events: CalendarEvent[];
}

function DaysInMonth({ listDays, events }: DaysInMonthProps) {
  return (
    <div className={styles["days-in-month"]}>
      {listDays.map(day => (
        <div
          key={`${day.date}-${day.enable}`}
          className={clsx(styles["day-item"], {
            [styles["enable"]]: day.enable,
            [styles["selected"]]: day.selected,
            // [styles["event"]]: day.date,
          })}
        >
          {day.date}
          <p className={styles["date-item-am"]}>{day.value.subtract(39, "day").format("DD/MM")}</p>
          <div className={styles["events-date-wrapper"]}>
            <EventsDate events={events} dateValue={day.value} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default DaysInMonth;

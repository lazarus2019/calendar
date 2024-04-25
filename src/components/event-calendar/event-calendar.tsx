import styles from "./event-calendar.module.scss";

import DaysInMonth from "@/components/days-in-month";
import WeekDays from "@/components/week-days";
import { DATE_TITLE_FORMAT } from "@/configs/common";
import { CalendarEvent } from "@/types";
import { getCalendarListDays } from "@/utils/calendar-helper";
import { formatDate } from "@/utils/date-helper";

import { Dayjs } from "dayjs";

export const range = (size: number) =>
  Array(size)
    .fill(0)
    .map((_, index) => index);

interface EventCalendarProps {
  events: CalendarEvent[];
  currentDate: Dayjs;
  month: Dayjs;
}

function EventCalendar({ currentDate, month }: EventCalendarProps) {
  const listDays = getCalendarListDays(month, currentDate);

  return (
    <div className={styles["event-calendar"]}>
      <h2>{formatDate(month, DATE_TITLE_FORMAT)}</h2>
      <div className={styles["week-days-container"]}>
        <WeekDays />
      </div>
      <div className={styles["list-days-container"]}>
        <DaysInMonth listDays={listDays} currentDate={currentDate} />
      </div>
    </div>
  );
}
export default EventCalendar;

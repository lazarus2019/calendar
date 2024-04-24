import styles from "./event-calendar.module.scss";

import DaysInMonth from "@/components/days-in-month";
import WeekDays from "@/components/week-days";
import { DATE_TITLE_FORMAT, WEEKDAYS } from "@/configs/common";
import { CalendarEvent } from "@/types";
import { formatDate } from "@/utils/date-helper";

import dayjs from "dayjs";

export const range = (size: number) =>
  Array(size)
    .fill(0)
    .map((_, index) => index);

interface EventCalendarProps {
  events: CalendarEvent[];
}

const currentDate = dayjs(new Date()).add(2, "month");

function EventCalendar({ events }: EventCalendarProps) {
  const calenderLayout = range(WEEKDAYS.length * 6);
  const daysInMonth = currentDate.daysInMonth();
  const startIndex = currentDate.startOf("month").day(); // get day of week  0 (Sunday) to 6 (Saturday)
  // calenderLayout.forEach((_, index) => {
  //   const date = index - startIndex + 1;
  //   console.log({ date, day: date > daysInMonth ? date - daysInMonth : date > 0 ? date : 0 });
  // });

  const listDays = calenderLayout.map((_, index) => {
    const date = index - startIndex + 1;
    return date > daysInMonth ? date - daysInMonth : date > 0 ? date : 0;
  });

  console.log({
    calenderLayout,
    currentDate: currentDate.format(),
    daysInMonth: currentDate.daysInMonth(),
    day: currentDate.day(),
  });
  return (
    <div className={styles["event-calendar"]}>
      <h2>{formatDate(currentDate, DATE_TITLE_FORMAT)}</h2>
      <div className={styles["week-days-container"]}>
        <WeekDays />
      </div>
      <div className={styles["list-days-container"]}>
        <DaysInMonth listDays={listDays} />
      </div>
    </div>
  );
}
export default EventCalendar;

import styles from "./days-in-month.module.scss";

import { CalendarDate } from "@/types";

import clsx from "clsx";
import { Dayjs } from "dayjs";

interface DaysInMonthProps {
  listDays: CalendarDate[];
  currentDate: Dayjs;
}

function DaysInMonth({ listDays }: DaysInMonthProps) {
  return (
    <div className={styles["days-in-month"]}>
      {listDays.map(day => (
        <div
          key={`${day.value}-${day.enable}`}
          className={clsx(styles["day-item"], {
            [styles["enable"]]: day.enable,
            [styles["selected"]]: day.selected,
          })}
        >
          {day.value}
        </div>
      ))}
    </div>
  );
}
export default DaysInMonth;

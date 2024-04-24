import styles from "./days-in-month.module.scss";

import { LIMIT_DAYS_OF_WEEK } from "@/configs/common";

interface DaysInMonthProps {
  listDays: number[];
}

function DaysInMonth({ listDays }: DaysInMonthProps) {
  const lastDateOfListDays = listDays[listDays.length - 1];
  const endOfMonth = lastDateOfListDays >= LIMIT_DAYS_OF_WEEK;

  const listDaysConverted = endOfMonth
    ? [...listDays].slice(0, LIMIT_DAYS_OF_WEEK * 5)
    : [...listDays].slice(0, LIMIT_DAYS_OF_WEEK * 6);

  console.log({ listDaysConverted });

  return (
    <div className={styles["days-in-month"]}>
      {listDaysConverted.map(day => (
        <div key={day} className={styles["day-item"]}>
          {day}
        </div>
      ))}
    </div>
  );
}
export default DaysInMonth;

import styles from "./week-days.module.scss";

import { WEEKDAYS } from "@/configs/common";

function WeekDays() {
  return (
    <div className={styles["week-days"]}>
      {WEEKDAYS.map(day => (
        <div key={day} className={styles["week-day"]}>
          {day}
        </div>
      ))}
    </div>
  );
}
export default WeekDays;

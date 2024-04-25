import styles from "./month-control.module.scss";

import { Dayjs } from "dayjs";

interface MonthControlProps {
  onChange: (month: Dayjs) => void;
  value: Dayjs;
}

function MonthControl({ value, onChange }: MonthControlProps) {
  const handleSetPreviousMonth = () => {
    onChange(value.subtract(1, "month"));
  };
  const handleSetNextMonth = () => {
    onChange(value.add(1, "month"));
  };
  return (
    <div className={styles["month-control"]}>
      <button onClick={handleSetPreviousMonth}>&lt;</button>
      <button onClick={handleSetNextMonth}>&gt;</button>
    </div>
  );
}
export default MonthControl;

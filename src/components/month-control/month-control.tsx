import styles from "./month-control.module.scss";

interface MonthControlProps {
  onChange: (month: number) => void;
  value: number;
}

function MonthControl({ value, onChange }: MonthControlProps) {
  const handleChange = (newValue: number) => {
    onChange(newValue);
  };
  return (
    <div className={styles["month-control"]}>
      <button onClick={() => handleChange(value - 1)}>&lt;</button>
      <button onClick={() => handleChange(value + 1)}>&gt;</button>
    </div>
  );
}
export default MonthControl;

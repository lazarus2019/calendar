import dayjs, { Dayjs } from "dayjs";

export const addDays = (date: Date, increaseDay: number) => {
  return dayjs(date).add(increaseDay, "day").toDate();
};

export const subDays = (date: Date, decreaseDay: number) => {
  return dayjs(date)
    .add(decreaseDay * -1, "day")
    .toDate();
};

export const formatDate = (date: Date | Dayjs, format: string) => {
  return dayjs(date).format(format);
};

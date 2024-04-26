import dayjs, { Dayjs, ManipulateType } from "dayjs";

export const addManipulateDate = (
  date: Date,
  increaseDay: number,
  type: ManipulateType = "day"
) => {
  return dayjs(date).add(increaseDay, type);
};

export const subManipulateDate = (
  date: Date,
  decreaseDay: number,
  type: ManipulateType = "day"
) => {
  return dayjs(date).subtract(decreaseDay, type);
};

export const formatDate = (date: Date | Dayjs, format: string) => {
  return dayjs(date).format(format);
};

import { Dayjs } from "dayjs";

export type CalendarEvent = {
  date: Dayjs;
  title: string;
};

export type CalendarDate = {
  date: number;
  value: Dayjs;
  enable: boolean;
  selected?: boolean;
};

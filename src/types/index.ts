import { Dayjs } from "dayjs";

export type CalendarEvent = {
  date: Dayjs;
  title: string;
};

export type CalendarDate = {
  value: number;
  enable: boolean;
  selected?: boolean;
};

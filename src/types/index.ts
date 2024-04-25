export type CalendarEvent = {
  date: Date;
  title: string;
};

export type CalendarDate = {
  value: number;
  enable: boolean;
  selected?: boolean;
};

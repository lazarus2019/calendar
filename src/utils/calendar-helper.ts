import { CalendarDate } from "@/types";

import { Dayjs } from "dayjs";

export const getCalendarListDays = (month: Dayjs, date: Dayjs): CalendarDate[] => {
  const dateNow = date.date();
  const firstDayInWeek = month.day();
  const amountDayOfMonth = month.daysInMonth();
  const lastDayInWeek = month.endOf("month").day();
  const amountDayOfPreviousMonth = month.add(-1, "month").daysInMonth();

  const listDatePreviousMonth = Array(firstDayInWeek)
    .fill({})
    .map((_, idx) => ({
      value: amountDayOfPreviousMonth - idx,
      enable: false,
    }))
    .sort((a, b) => a.value - b.value);

  const listDateCurrentMonth = Array(amountDayOfMonth)
    .fill({})
    .map((_, idx) => ({
      value: idx + 1,
      enable: true,
      selected: idx + 1 === dateNow,
    }));

  const listDateNextMonth = Array(6 - lastDayInWeek)
    .fill({})
    .map((_, idx) => ({ value: idx + 1, enable: false }));

  //   console.log({
  //     currentDate: date.format(),
  //     // listDatePreviousMonth,
  //     // listDateCurrentMonth,
  //     listDateNextMonth,
  //   });
  //   console.log({
  //     firstDayInWeek,
  //     amountDayOfMonth,
  //     lastDayInWeek,
  //     amountDayOfPreviousMonth,
  //   });

  return [...listDatePreviousMonth, ...listDateCurrentMonth, ...listDateNextMonth];
};

import { CalendarDate } from "@/types";

import { Dayjs } from "dayjs";

export const getCalendarListDays = (month: Dayjs, currentDate: Dayjs): CalendarDate[] => {
  const previousMonth = month.subtract(1, "month");
  const nextMonth = month.add(1, "month");

  const dateNow = currentDate.date();
  const isSameMonthCurrentDate = currentDate.isSame(month, "month");

  const firstDayInWeek = month.day(); // month.startOf('month').day()
  const amountDayOfMonth = month.daysInMonth();
  const lastDayInWeek = month.endOf("month").day();
  const amountDayOfPreviousMonth = previousMonth.daysInMonth();

  const listDatePreviousMonth = Array(firstDayInWeek)
    .fill({})
    .map((_, idx) => ({
      date: amountDayOfPreviousMonth - idx,
      enable: false,
      value: previousMonth.set("date", amountDayOfPreviousMonth - idx),
    }))
    .sort((a, b) => a.date - b.date);

  const listDateCurrentMonth = Array(amountDayOfMonth)
    .fill({})
    .map((_, idx) => ({
      date: idx + 1,
      enable: true,
      selected: isSameMonthCurrentDate ? idx + 1 === dateNow : false,
      value: month.set("date", idx + 1),
    }));

  const listDateNextMonth = Array(6 - lastDayInWeek)
    .fill({})
    .map((_, idx) => ({ date: idx + 1, enable: false, value: nextMonth.set("date", idx + 1) }));

  return [...listDatePreviousMonth, ...listDateCurrentMonth, ...listDateNextMonth];
};

import EventCalendar from "@/components/event-calendar";
import MonthControl from "@/components/month-control";
import { mockEvents } from "@/mock/event";

import { Analytics } from "@vercel/analytics/react";
import dayjs from "dayjs";
import "./App.css";
import { useState } from "react";

const currentDate = dayjs(new Date());
function App() {
  const [currentMonth, setCurrentMonth] = useState(currentDate.month() + 1);
  console.log({ currentMonth });
  return (
    <>
      <MonthControl onChange={value => setCurrentMonth(value)} value={currentMonth} />
      <EventCalendar events={mockEvents} />
      {/* Vercel analytics website traffic */}
      <Analytics />
    </>
  );
}

export default App;

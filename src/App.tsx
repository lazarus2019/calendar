import EventCalendar from "@/components/event-calendar";
import MonthControl from "@/components/month-control";
import { mockEvents } from "@/mock/event";

// import { Analytics } from "@vercel/analytics/react";
import dayjs from "dayjs";
import { useState } from "react";
import "./App.css";

const currentDate = dayjs();
function App() {
  const [currentMonth, setCurrentMonth] = useState(currentDate.startOf("month"));
  return (
    <>
      <MonthControl onChange={value => setCurrentMonth(value)} value={currentMonth} />
      <EventCalendar events={mockEvents} month={currentMonth} currentDate={currentDate} />
      {/* Vercel analytics website traffic */}
      {/* <Analytics /> */}
    </>
  );
}

export default App;

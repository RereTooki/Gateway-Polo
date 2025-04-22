import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameDay,
  isSameMonth,
} from "date-fns";

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const header = (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
        &lt;
      </button>
      <div className="text-sm font-semibold">
        {format(currentDate, "MMMM yyyy")}
      </div>
      <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
        &gt;
      </button>
    </div>
  );

  const daysOfWeek = (
    <div className="grid grid-cols-7 text-xs text-center font-semibold">
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );

  const generateDays = () => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 });

    const days = [];
    let date = start;

    while (date <= end) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const isToday = isSameDay(date, today);
        const isCurrentMonth = isSameMonth(date, currentDate);

        week.push(
          <div
            key={date.toString()}
            className={`py-1 text-sm text-center rounded ${
              isToday
                ? "bg-white text-green-900 font-bold"
                : isCurrentMonth
                ? "text-white"
                : "text-gray-400"
            }`}
          >
            {format(date, "d")}
          </div>
        );
        date = addDays(date, 1);
      }
      days.push(
        <div key={date.toString()} className="grid grid-cols-7 gap-1">
          {week}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-green-900 text-white p-4 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Availability</h3>
      {header}
      {daysOfWeek}
      <div className="space-y-1 mt-1">{generateDays()}</div>
      <button className="mt-4 bg-white text-green-900 px-4 py-2 rounded-md text-sm font-medium">
        To Book
      </button>
    </div>
  );
};

export default Calendar;

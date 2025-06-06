import React, { useEffect, useState } from 'react';
import { getDayOfWeek, getFormattedTime } from '../utils/dateUtils';

export const ClockWidget: React.FC = () => {
  const [time, setTime] = useState(getFormattedTime());
  const [day, setDay] = useState(getDayOfWeek());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
      setDay(getDayOfWeek());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="p-4 rounded-xl shadow-md bg-white text-center w-full max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-700">🕒 Current Time</h2>
      <p className="text-3xl font-mono mt-2 text-gray-900">{time}</p>
      <p className="text-md mt-1 text-gray-600">{day}</p>
    </div>
  );
};
import React from "react";
import { useClock } from "../context/ClockContext";

export default function ClockDisplay() {
  const { hour, minute, second, weekday, day, month, year } = useClock();
  return (
    <div className="bg-white text-blue-600 rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
      <h1 className="text-2xl font-bold uppercase mb-4">Digital Clock</h1>
      <div className="flex items-center justify-center text-4xl font-bold mb-6 gap-2">
        <div className="bg-gray-200 rounded-md p-3 shadow-inner w-16 font-mono">
          {hour}
        </div>
        :
        <div className="bg-gray-200 rounded-md p-3 shadow-inner w-16 font-mono">
          {minute}
        </div>
        :
        <div className="bg-gray-200 rounded-md p-3 shadow-inner w-16 font-mono">
          {second}
        </div>
      </div>

      <div className="text-lg font-medium">{weekday}</div>
      <div className="flex justify-center items-center text-sm mt-2">
        <span>{day}</span>
        <span className="mx-1">-</span>
        <span>{month}</span>
        <span className="mx-1">-</span>
        <span>{year}</span>
      </div>
    </div>
  );
}

import React, { createContext, useState, useEffect, useContext } from "react";

// Context yaratish
const ClockContext = createContext();

// Provider komponent yaratish
export const ClockProvider = ({ children }) => {
  const [clock, setClock] = useState({
    hour: "00",
    minute: "00",
    second: "00",
    weekday: "Sunday",
    day: "01",
    month: "January",
    year: "2024",
  });

  useEffect(() => {
    // Haftaning kunlari uchun massiv
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Oy nomlari uchun massiv
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Raqamlarni oldiga nol qoshish funksiyasi
    const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

    // Soatni yangilash funksiyasi
    const updateClock = () => {
      const time = new Date();
      setClock({
        hour: addLeadingZero(time.getHours()),
        minute: addLeadingZero(time.getMinutes()),
        second: addLeadingZero(time.getSeconds()),
        weekday: daysOfWeek[time.getDay()],
        day: addLeadingZero(time.getDate()),
        month: monthsOfYear[time.getMonth()],
        year: time.getFullYear(),
      });
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  return (
    <ClockContext.Provider value={clock}>{children}</ClockContext.Provider>
  );
};

export const useClock = () => useContext(ClockContext);

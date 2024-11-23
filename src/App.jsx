import React from "react";
import { ClockProvider } from "./context/ClockContext";
import ClockDisplay from "./components/ClockDisplay";

export default function App() {
  return (
    <ClockProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-500 flex justify-center items-center">
        <ClockDisplay />
      </div>
    </ClockProvider>
  );
}

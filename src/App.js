import React, { useState } from "react";
import "./App.css";
import CalendarComponent from "./CalendarComponent";
import "antd/dist/antd.css";
import NewCalendar from "./NewCalendar";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <NewCalendar />
    </div>
  );
}

export default App;

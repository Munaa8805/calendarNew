import React, { useState } from "react";
import Month from "./Month";

function App() {
  const data = [
    ["10 сар", 31, 5],
    ["11 сар", 30, 1],
    ["12 сар", 31, 3],
  ];
  const data2023 = [
    ["1 сар", 31, 6],
    ["2 сар", 28, 2],
    ["3 сар", 31, 2],
    ["4 сар", 30, 5],
    ["5 сар", 31, 0],
    ["6 сар", 30, 3],
    ["7 сар", 31, 5],
    ["8 сар", 31, 1],
    ["9 сар", 30, 4],
    ["10 сар", 31, 6],
    ["11 сар", 30, 2],
    ["12 сар", 31, 4],
  ];
  const weekdays = [
    { id: 0, name: "Ням" },
    { id: 1, name: "Даваа" },
    { id: 2, name: "Мягмар" },
    { id: 3, name: "Лхагва" },
    { id: 4, name: "Пүрэв" },
    { id: 5, name: "Баасан" },
    { id: 6, name: "Бямба" },
    { id: 7, name: "Бүх" },
  ];

  const [checkedays, setCheckedays] = useState(null);
  const checkedHandler = (index) => {
    setCheckedays(index);
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: "10px", margin: "10px 0px" }}>
        {weekdays.map((item, index) => {
          return (
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={() => checkedHandler(item.id)}
              />{" "}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div style={{ width: "1500px", display: "flex", height: "800px" }}>
        <div style={{ width: "210px" }}>
          2022
          <div>
            {data.map((d) => {
              return <Month d={d} year={2022} />;
            })}
          </div>
        </div>
        <div
          style={{
            width: "1060px",
            backgroundColor: "green",
            margin: "0 0 0 30px",
          }}
        >
          2023
          <div>
            <div>
              {data2023.map((d) => {
                return <Month d={d} checkedays={checkedays} year={2023} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

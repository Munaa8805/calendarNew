import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const CalendarComponent = () => {
  const months = [
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
  let content = months.map((item, index) => {
    let date = new Date();
    date.setDate(1);

    // const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    // console.log("lastDay", lastDay);

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    // console.log("prevLastDay", prevLastDay);

    const firstDayIndex = date.getDay();
    // console.log("firstDayIndex", firstDayIndex);

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    // console.log("lastDayIndex", lastDayIndex);

    const nextDays = 7 - lastDayIndex - 1;

    date = new Date(date.setMonth(index));
    console.log("date", date);

    let days = "";
    // date.setMonth(date.getMonth() + index);

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        // date.getMonth() === new Date().getMonth()
        i === new Date().getDate() &&
        date === new Date().getMonth()
        // i === new Date().getDate() &&
        // date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
    }

    return (
      <div className="container" key={index}>
        <div className="calendar">
          <div className="month">
            <i className="fas fa-angle-left prev"></i>
            <div className="date">
              <h1>{item}</h1>
              <p></p>
            </div>
            <i className="fas fa-angle-right next"></i>
          </div>
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days" dangerouslySetInnerHTML={{ __html: days }} />
        </div>
      </div>
    );
  });

  return <div className="wrapper">{content}</div>;
};

export default CalendarComponent;

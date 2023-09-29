"use client";

import { useState, useEffect, useRef } from "react";
import CalendarDate from "./CalendarDate";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function CustomDatePicker() {
  const [refresherState, setRefresherState] = useState(false);
  const currentMonth = useRef(0);

  useEffect(() => {
    setRefresherState(true);
    if (date) currentMonth.current = date.getMonth();
  }, []);

  // getting new date, current year and month
  let date = new Date(),
    currYear = date.getFullYear();

  // storing full name of all months in array
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

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currentMonth.current, 1).getDay(), // getting first day of month
      lastDateofMonth = new Date(
        currYear,
        currentMonth.current + 1,
        0,
      ).getDate(), // getting last date of month
      lastDayofMonth = new Date(
        currYear,
        currentMonth.current,
        lastDateofMonth,
      ).getDay(), // getting last day of month
      lastDateofLastMonth = new Date(
        currYear,
        currentMonth.current,
        0,
      ).getDate(); // getting last date of previous month
    let liTag = "";
    let datesHolder = [];
    let loopIndex = 0;

    for (let i = firstDayofMonth; i > 0; i--) {
      // creating li of previous month last days
      // liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      datesHolder[loopIndex] = (
        <CalendarDate
          key={loopIndex}
          dateText={lastDateofLastMonth - i + 1}
          cssClasses={"inactive"}
        />
      );
      loopIndex++;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      // creating li of all days of current month
      // adding active className to li if the current day, month, and year matched
      let isToday =
        i === date.getDate() &&
        currentMonth.current === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      // liTag += `<li class="${isToday}">${i}</li>`;
      datesHolder[loopIndex] = (
        <CalendarDate key={loopIndex} dateText={i} cssClasses={isToday} />
      );
      loopIndex++;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      // creating li of next month first days
      // liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
      datesHolder[loopIndex] = (
        <CalendarDate
          key={loopIndex}
          dateText={i - lastDayofMonth + 1}
          cssClasses={"inactive"}
        />
      );
      loopIndex++;
    }

    return datesHolder;
  };

  const handlePrevOrNext = (prev) => {
    currentMonth.current = prev
      ? currentMonth.current - 1
      : currentMonth.current + 1;

    if (currentMonth.current < 0 || currentMonth.current > 11) {
      date = new Date(currYear, currentMonth.current, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currentMonth.current = date.getMonth(); // updating current month with new date month
      currentMonth.current = date.getMonth();
    } else {
      date = new Date(); // pass the current date as date value
    }
    setRefresherState((prev) => !prev);
  };

  return (
    <div className="calendar-container">
      <header className="mb-3">
        <p className="current-date">{months[currentMonth.current]}</p>
        <div className="icons">
          <span id="prev" onClick={() => handlePrevOrNext(true)}>
            <KeyboardArrowLeftIcon sx={{ width: "28px", height: "28px" }} />
          </span>
          <span id="next" onClick={() => handlePrevOrNext(false)}>
            <KeyboardArrowRightIcon sx={{ width: "28px", height: "28px" }} />
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>SUN</li>
          <li>MON</li>
          <li>TUE</li>
          <li>WED</li>
          <li>THU</li>
          <li>FRI</li>
          <li>SAT</li>
        </ul>

        <ul className="days">{renderCalendar()}</ul>
      </div>
    </div>
  );
}

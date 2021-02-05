import React from "react";
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

export default function CalendarHeader({ value, onChange }) {
  let monthsMKDNames = []
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className="header">
      <div
        className="previous"
        onClick={() => !thisMonth() && onChange(prevMonth())}
      >
        {!thisMonth() ? <IoArrowBackCircleOutline/> : null}
      </div>
      <div className="current">
        { currMonthName()==="January" ? "Јануари"
          : currMonthName()==="February" ? "Февруари" 
        : currMonthName()==="March" ? "Maрт" 
        : currMonthName()==="April" ? "Април" 
        : currMonthName()==="May" ? "Мај" 
        : currMonthName()==="June" ? "Јуни" 
        : currMonthName()==="July" ? "Јули" 
        : currMonthName()==="August" ? "Август" 
        : currMonthName()==="September" ? "Септември" 
        : currMonthName()==="October" ? "Октомври" 
        : currMonthName()==="November" ? "Ноември" 
        : currMonthName()==="December" ? "Декември" : null} {currYear()}
      </div>
      <div className="next" onClick={() => onChange(nextMonth())}>
        <IoArrowForwardCircleOutline/>
      </div>
    </div>
  );
}

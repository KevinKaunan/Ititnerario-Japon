import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import "./counterStyles.css";

export default function ShowCounter({ days, hours, minutes, seconds }) {
  return (
    <div className='showCounter'>
      <p className='countdownLink'>
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Minutes"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </p>
    </div>
  );
}

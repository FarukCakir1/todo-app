import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DetailTab({ detail, changeLastDate, id, setDateDif, datedif}) {
  const [startDate, setStartDate] = useState(new Date());
  const [isDateEdit, setİsDateEdit] = useState(false)

  const handleDateChange = date => {
    const currentDay = new Date().getDate()
    setStartDate(date)
    const month = date.getMonth()
    const day = date.getDate()

    changeLastDate(month, day, id)

    const dateDif = day - currentDay;
    setDateDif(dateDif)
  }

  const handleDatePicking = () => {
    setİsDateEdit(true)
  }

  const handleCalenderClose = () => {
    setİsDateEdit(false)
  }

  return (
    <div className={`bg-slate-100 transition-all duration-500 ${detail ? "h-56" : "h-0"} border-b-2 border-l-2 border-r-2 border-solid border-slate-400`}>
      <form className={`${detail ? "scale-100" : "scale-0"} transition-all duration-700 h-full w-full flex flex-col items-start justify-self-end`}>
        <div className='flex flex-row justify-between w-full h-10 items-center'>
           {isDateEdit 
           ? <DatePicker startOpen={true} onCalendarClose={handleCalenderClose} className='bg-slate-100' selected={startDate} onChange={handleDateChange}/> 
           : <button onClick={handleDatePicking} className='bg-indigo-300 text-sm p-1 m-1 rounded-sm'>Set Date</button> }
           <span 
            className={`text-sm mr-3 font-semibold ${datedif < 0 
            ? "text-red-500" 
            : datedif === 0 ? "text-yellow-600" 
            : ""}`}
           >
              {datedif > 0 
              ? `${datedif} days left` 
              : datedif === 0 ? "Last day" 
              : "Time is up"} 
           </span>
        </div>
        
        <textarea className='w-full h-46 outline-none border-2 border-slate-300 bg-slate-100 resize-none p-2' id="taskDetail" cols="15" rows="10" placeholder='Task Detail'></textarea>
      </form>
    </div>
  )
}


export default DetailTab
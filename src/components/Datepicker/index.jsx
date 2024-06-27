import DatePicker from 'react-datepicker'
import '../../styles/Datepicker.css'
import 'react-datepicker/dist/react-datepicker.css'
import React, { useState } from 'react'
import { LuCalendarDays } from 'react-icons/lu'

export default function CustomDatePicker({ onChange, errorMessage }) {
  const [startDate, setStartDate] = useState(new Date())

  const handleChange = (date) => {
    setStartDate(date)
    onChange(date)
  }
  console.log(startDate)
  return (
    <div className="date">
      <div className="dateContainer flex relative">
        <label htmlFor="datePicker" className="sr-only">
          Date of Birth
        </label>
        <DatePicker
          id="datePicker"
          selected={startDate}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date"
          popperPlacement="left-start"
          showMonthDropdown
          showYearDropdown
          todayButton="Today"
        />
        <LuCalendarDays className="absolute right-3 bottom-4" />
      </div>
      <div className="errorMessageContainer">
        {errorMessage && (
          <span className="error-message mt-2 visible text-red-600 text-sm">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  )
}

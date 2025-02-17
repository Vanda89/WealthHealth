import React, { useState, useRef } from 'react'
import DatePicker from 'react-datepicker'
import '../../styles/Datepicker.css'
import 'react-datepicker/dist/react-datepicker.css'
import { LuCalendarDays } from 'react-icons/lu'

export default function CustomDatePicker({
  className,
  label,
  htmlFor,
  value,
  onChange,
  errorMessage,
}) {
  const [startDate, setStartDate] = useState(
    value ? new Date(value) : new Date(),
  )
  const datePickerRef = useRef(null)

  const handleChange = (date) => {
    setStartDate(date)
    onChange(date)
  }

  const labelStyle = `absolute text-sm text-custom-gray-900 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] bg-white rounded-md mx-2 px-1`

  return (
    <div className={`date ${className}`}>
      <div className="dateContainer flex relative">
        <label htmlFor={htmlFor} className={` ${labelStyle}`}>
          {label}
        </label>
        <DatePicker
          id={htmlFor}
          className="font-bold"
          selected={value ? new Date(value) : new Date()}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date"
          popperPlacement="left-start"
          showMonthDropdown
          showYearDropdown
          todayButton="Today"
          ref={datePickerRef}
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

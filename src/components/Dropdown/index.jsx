import { Select, Option } from '@material-tailwind/react'
import '../../styles/Dropdown.css'
import { useState, useEffect } from 'react'

export default function Dropdown({
  id,
  label,
  items,
  value,
  onChange,
  errorMessage,
}) {
  const handleChange = (e) => {
    const value = e
    const selectedItem = items.find((item) => item === value)

    if (onChange) {
      onChange(selectedItem ? selectedItem : value)
    }
  }

  return (
    <div className={`dropdown ${id} relative w-full`}>
      <Select
        label={label}
        aria-label={label}
        value={value}
        onChange={handleChange}
      >
        {items.map((item) => {
          return (
            <Option key={item} value={item}>
              {item}
            </Option>
          )
        })}
      </Select>
      {errorMessage && (
        <span className="error-message mt-2 visible text-red-600 text-sm">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

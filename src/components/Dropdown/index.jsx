import { Select, Option } from '@material-tailwind/react'
import '../../styles/Dropdown.css'
import { useState, useEffect } from 'react'

export default function Dropdown({ label, items, onChange, errorMessage }) {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e) => {
    const value = event.target.textContent
    console.log(value, 'value')
    const selectedItem = items.find((item) => item === value)

    setSelectedValue(selectedItem ? selectedItem : value)

    if (onChange) {
      onChange(selectedItem ? selectedItem : value)
    }
  }

  return (
    <div className="dropdown">
      <Select label={label} value={selectedValue} onChange={handleChange}>
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

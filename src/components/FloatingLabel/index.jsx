import React, { useState } from 'react'

export default function FloatingLabel({
  id,
  label,
  type,
  value,
  onChange,
  errorMessage,
}) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const labelStyle = `absolute text-sm text-custom-gray-900 duration-300 transform ${
    isFocused || value ? '-translate-y-6 scale-75' : ' translate-y-0 scale-100'
  } top-4 z-10 origin-[0] bg-white rounded-md mx-2 px-1`

  return (
    <div className={`${id} relative w-full`}>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="block px-2.5 pb-2.5 pt-3.5 w-full text-sm text-custom-gray-900  focus:bg-white font-medium border-3 border-custom-gray-200 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-custom-green-300 peer"
      />
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      {errorMessage && (
        <span className="error-message mt-2 ml-2 visible text-red-600 text-sm">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

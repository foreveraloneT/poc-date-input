import React from 'react'

import './DateInput.css'

function DateInput({ value, onChange, placeholder, ...props }) {
  const dateInputRef = React.useRef(null)
  const maskInputRef = React.useRef(null)

  const onFocus = () => {
    dateInputRef.current.showPicker()
  }

  const onChangeHandler = (e) => {
    if (typeof onChange === 'function') {
      onChange(e)
    }

    maskInputRef.current.blur()
  }

  const maskValue = React.useMemo(() => {
    if (value === "") return ""
    
    const [y, m, d] = value.split('-')

    return [d,m,y].join('/')
  }, [value])

  return (
    <div className="date-input-wrapper">
      <input
        className="mask-date-input"
        ref={maskInputRef}
        type="text"
        value={maskValue}
        readOnly
        placeholder={placeholder}
        onFocus={onFocus}
        {...props}
      />
      <input
        className="real-date-input"
        ref={dateInputRef}
        type="date"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default DateInput;
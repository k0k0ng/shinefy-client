import React, { useState } from 'react'

export default function CalendarDate({dateText, cssClasses}) {
  const [itemClassName, setItemClassName] = useState(false);

  const dateClicked = () => {
    setItemClassName(prev => !prev);
  }

  return (
    <li onClick={dateClicked} className={`flex items-center justify-center ${cssClasses} ${itemClassName ? "dateClicked" : ""}`}>
      <p className='flex items-center justify-center'>{dateText}</p>
    </li>
  )
}

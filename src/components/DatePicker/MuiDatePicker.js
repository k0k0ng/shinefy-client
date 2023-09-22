"use client"

import { useState, useEffect } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



export default function MuiDatePicker() {

  // *** This code is used to avoid error during Hydration when using MUI DatePicker ***
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if(!isClient)
    return ("");
  // **********************
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar  id="DateCalendarID" />
    </LocalizationProvider>
  )
}

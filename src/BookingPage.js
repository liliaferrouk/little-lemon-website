import React, { useState } from 'react'
import BookingForm from './BookingForm'
import "./BookingPage.css"

function BookingPage(props) {
  return (
    <div>
      <BookingForm times={props.times}/>
    </div>
  )
}

export default BookingPage
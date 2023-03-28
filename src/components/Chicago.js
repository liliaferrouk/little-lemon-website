import React from 'react'
import imgback from "../assets/Mario and Adrian A.jpg"
import imgfront from "../assets/restaurant chef B.jpg"


function Chicago() {
  return (
    <div className='chicago'>
      <div className='chicago-test'>
      <h1>Little lemon</h1>
      <h3>Chicago</h3>
      <p>Our restaurant is inspired by the vibrant and diverse flavors of the Mediterranean, and our menu features a variety of dishes made with fresh, locally-sourced ingredients. From our tangy lemon chicken to our zesty grilled shrimp, there's something for everyone to enjoy.</p>
      </div>
      <div className='chicago-images'>
      <img src={imgback} alt="img back" />
      <img src={imgfront} alt="img front" />
      </div>
    </div>
  )
}

export default Chicago
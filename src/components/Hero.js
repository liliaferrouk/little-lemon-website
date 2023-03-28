import React from 'react'
import imgfood from "../assets/restauranfood.jpg"

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-div'>
        <h1>Littel lemon</h1>
        <h3>Chicago</h3>
        <p>Welcome to Little Lemon, the perfect spot for a delicious meal in a cozy and inviting atmosphere. Come experience the warm hospitality and delightful cuisine of Little Lemon today!</p>
        <button aria-label="On Click">Reserve a table</button>
        </div>
        <img src={imgfood} alt="food" width={50} />
    </div>
  )
}

export default Hero
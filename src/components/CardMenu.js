import React from 'react'

function CardMenu({ image, title, price, description }) {
  return (
    <div className='cardMenu'>
        <img src={image} alt="foodimg" width={200} />
        <h4>{title}                  <span>${price}</span></h4>
        <p>{description}</p>
    </div>
  )
}

export default CardMenu
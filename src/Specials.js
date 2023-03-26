import React from 'react'
import CardMenu from './CardMenu'

function Specials() {
  return (
    <div className='specials'>
      <div className='specials-h2-button'>
      <h2>Specials</h2>
      <button>Online Menu</button>
      </div>
      <div className='specials-3best'>
          <CardMenu/>
          <CardMenu/>
          <CardMenu/>
      </div>
    </div>
  )
}

export default Specials
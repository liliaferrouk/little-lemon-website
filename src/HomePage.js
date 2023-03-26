import React from 'react'
import Hero from './Hero'
import Specials from './Specials'
import ConstumersSay from './ConstumersSay'
import Chicago from './Chicago'
import './HomePag.css';


function HomePage() {
  return (
    <div>
        <Hero/>
        <Specials/>
        <ConstumersSay/>
        <Chicago/>
    </div>
  )
}

export default HomePage
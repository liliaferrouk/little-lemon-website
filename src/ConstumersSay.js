import React from 'react'
import Comment from './Comment'

function ConstumersSay() {
  return (
    <div className='constumerSays'>
      <h2>Testimonials</h2>
      <div className='comments'>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </div>
  )
}

export default ConstumersSay
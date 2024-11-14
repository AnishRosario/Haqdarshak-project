import React from 'react'
import './text.css'

const Text = ({text}) => {
  return (
    <div className='text-container'>
        <div className="text">
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Text
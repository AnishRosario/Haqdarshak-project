import React from 'react'
import './Input.css'

const Input = ({placeholder}) => {
  return (
    <div className='input-con'>
        <div className="input-field">
        <input type="text" placeholder={placeholder} />
        </div>
    </div>
  )
}

export default Input
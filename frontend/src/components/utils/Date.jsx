import React from 'react'
import '../styles/Date.css'

const Date = ({placeholder}) => {
  return (
    <div className='input-con'>
        <div className="input-field">
        <input type="Date" placeholder={placeholder} />
        </div>
    </div>
  )
}

export default Date
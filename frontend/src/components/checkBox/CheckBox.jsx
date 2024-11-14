import React from 'react'
import './CheckBox.css'

const CheckBox = ({lan,change,setValue}) => {
  return (
    <div className='checkbox-con'>
        <div className="input-fields">
        <input type="radio" name="register" onClick={()=>setValue("true")} />
        <label htmlFor="">{lan}</label> 
        </div>

    </div>
  )
}

export default CheckBox
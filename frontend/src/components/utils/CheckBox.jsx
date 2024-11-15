import React from 'react'
import '../styles/CheckBox.css'

const CheckBox = ({lan,change,setValue,name,setcurValue}) => {
  return (
    <div className='checkbox-con'>
        <div className="input-fields">
        <input type="radio" name={name} onClick={()=>{setValue("true"), setcurValue(name) }} />
        <label htmlFor="">{lan}</label> 
        </div>

    </div>
  )
}

export default CheckBox
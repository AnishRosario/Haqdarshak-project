import React from 'react'
import './Dropdown.css'

const Dropdown = ({name,options=[],onChange,disabled=false}) => {
  return (
    <div className='dropdown-con'>
        <div className='dropdown-field'>
        <select name='State' onChange={onChange} disabled={disabled}>
            <option value="">{name}</option>
            {
                options.map((state)=>(
                    <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                    </option>
                ))
            }
        </select>
        </div>
    </div>
  )
}

export default Dropdown
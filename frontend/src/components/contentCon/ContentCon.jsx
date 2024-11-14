import React from 'react'
import './ContentCon.css'

const ContentCon = ({children}) => {
  return (
    <div className='container'>
        <div className="card-container">
          {children}
        </div>
    </div>
  )
}

export default ContentCon
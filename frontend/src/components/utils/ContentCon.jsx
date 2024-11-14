import React from 'react'
import '../styles/ContentCon.css'

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
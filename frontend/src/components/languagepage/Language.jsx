import React from 'react'
import './language.css'
import { IoIosArrowRoundBack } from "react-icons/io";

const Language = () => {
  return (
    <div className='con'>
        <div className="container">
        <div className="back-con">
            <div className="back-item">
            <IoIosArrowRoundBack size={35} />
            </div>
        </div>
        <div className="text">
            <h1>Which language do you prefer</h1>
        </div>
        <div className="body-card">
            <div className="card-top">
                <div className="cardselect-btn">
                    <div className="checkbox-con">
                    <input type="checkbox" />
                    <label htmlFor="">English</label>
                    </div>
                    <div className="checkbox-con">
                    <input type="checkbox" />
                    <label htmlFor="">Hindi</label>
                    </div>
                    <div className="checkbox-con">
                    <input type="checkbox" />
                    <label htmlFor="">Tamil</label>
                    </div>
                </div>
            </div>
            <div className="card-next-btn">
                <button>Next</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Language
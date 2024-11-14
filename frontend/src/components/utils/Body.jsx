import React from 'react';
import '../styles/Body.css';
import { IoIosArrowRoundBack } from "react-icons/io";

const Body = ({children,onPrev}) => {
  return (
    <div className='f-con'>
      <div className="body-container">
      <div className="back-con">
            <div className="back-item" onClick={onPrev}>
            <IoIosArrowRoundBack size={35} />
            </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Body;

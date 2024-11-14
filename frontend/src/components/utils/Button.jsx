// import React from 'react'
// import './Button.css'

// const Button = ({ onClick, text }) => {
//   return (
//     <div className='btn-container'>
//         <div className="btn">
//             <button onClick={onClick}>{text}</button>
//         </div>
//     </div>
//   )
// }

// export default Button

import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick, text }) => {
  return (
        <div className='btn-container'>
  <div className="btn">

    <button className="button" onClick={onClick}>
      {text}
    </button>
    </div>
    </div>
  );
};

export default Button;

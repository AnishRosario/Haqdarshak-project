

import React from 'react';
import '../styles/Button.css';
import { Link } from 'react-router-dom';

const Button = ({ onClick, text,link }) => {
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

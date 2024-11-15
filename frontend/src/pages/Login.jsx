import React from 'react';
import Body from '../components/utils/Body';
import Text from '../components/utils/Text';
import ContentCon from '../components/utils/ContentCon';
import CheckBox from '../components/utils/CheckBox';
import Button from '../components/utils/Button';
import './styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ onNext, onPrev }) => {
  const[value,setValue]=useState(false);
  const navigate=useNavigate();
  const [curValue,setcurValue]=useState("");
  const changeNext=()=>{
    navigate(curValue)
  }
  const changeBack=()=>{
    navigate('/')
  }
  return (
    <div>
      <Body onPrev={changeBack}>
        <Text text={"How do you want to login?"} />
        <ContentCon>
          <div className="content-section">
            <div className="card-content">
              <CheckBox lan={"Register me as a new user"} name={"/location"} setcurValue={setcurValue} change={value} setValue={setValue}/>
              <CheckBox lan={"Use my phone number"} name={"/otp"} change={value} setValue={setValue} setcurValue={setcurValue}  />
              <CheckBox lan={"Use my Yojana Card"} change={value} setValue={setValue} />
            </div>
          </div>
          <div className="lanpage-btn">
            {
              value==="true"?
              <Button text="Next" onClick={changeNext} />:
              <></>
            }
          </div>
        </ContentCon>
      </Body>
    </div>
  );
};

export default Login;

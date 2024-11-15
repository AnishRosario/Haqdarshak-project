import React, { useState } from 'react'
import './styles/Lanpage.css'
import Body from '../components/utils/Body'
import ContentCon from '../components/utils/ContentCon'
import Text from '../components/utils/text'
import CheckBox from '../components/utils/CheckBox'
import Button from '../components/utils/Button'
import { useNavigate } from 'react-router-dom'


const Lanpage = ({ onNext }) => {
  const[value,setValue]=useState(false);
  const navigate=useNavigate()
  const changeNext=()=>{
    navigate('/login')
  }
  return (
    <div>
      <Body>
        <Text text={"Which language do you prefer"} />
        <ContentCon>
          <div className="content-section">
            <div className="card-content">
              <CheckBox lan={"English"} change={value} setValue={setValue}/>
              <CheckBox lan={"Hindi"} change={value} setValue={setValue}/>
              <CheckBox lan={"Tamil"} change={value} setValue={setValue}/>
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

export default Lanpage;

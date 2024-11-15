import React from 'react'
import './styles/Mobile.css'
import Body from '../components/utils/Body'
import Text from '../components/utils/Text'
import ContentCon from '../components/utils/ContentCon'
import Input from '../components/utils/Input'
import Button from '../components/utils/Button'
import { useNavigate } from 'react-router-dom';

const Mobile = ({onNext,onPrev}) => {
    const navigate=useNavigate();
    const changeBack=()=>{
        navigate('/login')
      }
      const changeNext=()=>{
        navigate('/personal')
      }
  return (
    <div>
        <Body onPrev={changeBack}>
            <Text text={"What is your mobile number"}/>
            <ContentCon>
                <div className="mob-content-section">
                    <div className='mob-input'>
                <Input  placeholder={"Enter mobile number"}/>
                    </div>

                </div>
                    <div className='lanpage-btn'>
                    <Button text="Next" onClick={changeNext} />
                    </div>
            </ContentCon>
        </Body>
    </div>
  )
}

export default Mobile
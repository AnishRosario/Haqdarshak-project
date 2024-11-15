import React from 'react'
import Body from '../components/utils/Body'
import Text from '../components/utils/text'
import ContentCon from '../components/utils/ContentCon'
import Label from '../components/utils/Label'
import Input from '../components/utils/Input'
import Radio from '../components/utils/Radio'
import Date from '../components/utils/Date'
import './styles/PersonalDetails.css'
import Button from '../components/utils/Button'
import { useNavigate } from 'react-router-dom'

const PersonalDetails = () => {
    const navigate=useNavigate();
    const changeBack=()=>{
        navigate('/otp')
      }
  return (
    <div>
        <Body onPrev={changeBack}>
            <Text text={"Personal Details"}/>
            <ContentCon>
                <div className="content">
                <div className='name-manage'>
                <Label name={"Name"}/>
                <Input placeholder={"Enter your name"}/>
                </div>
                <div className='gen-manage'>
                <Label name={"Gender"}/>
                <div className='radio-manage'>
                <Radio name={"Male"}/>
                <Radio name={"Female"}/>
                <Radio name={"Other"}/>
                </div>
                </div>
                <div className='dob-manage'>
                <Label name={"DOB/Age"}/>
                <Date placeholder={"Enter your DOB"}/>
                <p>Or</p>
                <Input placeholder={"age"}/>
                </div>
                </div>
                <div className="btn">
                <Button text={"Next"}/>
                </div>
            </ContentCon>
        </Body>
    </div>
  )
}

export default PersonalDetails
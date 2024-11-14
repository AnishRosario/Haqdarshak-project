import React from 'react'
import './Mobile.css'
import Body from '../src/components/body/Body'
import Text from '../src/components/body/text/text'
import ContentCon from '../src/components/contentCon/ContentCon'
import Input from '../src/components/inputs/Input'
import Button from '../src/components/button/Button'

const Mobile = ({onNext,onPrev}) => {
  return (
    <div>
        <Body onPrev={onPrev}>
            <Text text={"What is your mobile number"}/>
            <ContentCon>
                <div className="mob-content-section">
                    <div className='mob-input'>
                <Input  placeholder={"Enter mobile number"}/>
                    </div>

                </div>
                    <div className='lanpage-btn'>
                    <Button text="Next" onClick={onNext} />
                    </div>
            </ContentCon>
        </Body>
    </div>
  )
}

export default Mobile
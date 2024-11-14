import React from 'react';
import Body from '../src/components/body/Body';
import Text from '../src/components/body/text/text';
import ContentCon from '../src/components/contentCon/ContentCon';
import CheckBox from '../src/components/checkBox/CheckBox';
import Button from '../src/components/button/Button';
import './Login.css';

const Login = ({ onNext, onPrev }) => {
  return (
    <div>
      <Body onPrev={onPrev}>
        <Text text={"How do you want to login?"} />
        <ContentCon>
          <div className="content-section">
            <div className="card-content">
              <CheckBox lan={"Register me as a new user"}/>
              <CheckBox lan={"Use my phone number"} />
              <CheckBox lan={"Use my Yojana Card"} />
            </div>
          </div>
          <div className="lanpage-btn">
            <Button text="Next" onClick={onNext} />
          </div>
        </ContentCon>
      </Body>
    </div>
  );
};

export default Login;

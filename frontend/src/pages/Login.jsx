import React from 'react';
import Body from '../components/utils/Body';
import Text from '../components/utils/Text';
import ContentCon from '../components/utils/ContentCon';
import CheckBox from '../components/utils/CheckBox';
import Button from '../components/utils/Button';
import './styles/Login.css';

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
            <Button text="Next" onClick={onNext} link={"/login"}/>
          </div>
        </ContentCon>
      </Body>
    </div>
  );
};

export default Login;

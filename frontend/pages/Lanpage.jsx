import React, { useState } from 'react'
import './Lanpage.css'
import Body from '../src/components/body/Body'
import ContentCon from '../src/components/contentCon/ContentCon'
import Text from '../src/components/body/text/text'
import CheckBox from '../src/components/checkBox/CheckBox'
import Button from '../src/components/button/Button'


// const Lanpage = () => {
//   return (
//     <div>
//         <Body>
//             <Text text={"Which language do you prefer"}/>
//             <ContentCon>
//               <div className="content-section">
//               <div className="card-content">
//               <CheckBox lan={"English"}/>
//               <CheckBox lan={"Hindi"}/>
//               <CheckBox lan={"Tamil"}/>
//               </div>
//               </div>
//               <div className="lanpage-btn">
//               <Button/>
//               </div>
//             </ContentCon>
//         </Body>
//     </div>
//   )
// }

// export default Lanpage

const Lanpage = ({ onNext }) => {
  const[value,setValue]=useState(false);
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
              <Button text="Next" onClick={onNext} />:
              <></>
            }
          </div>
        </ContentCon>
      </Body>
    </div>
  );
};

export default Lanpage;

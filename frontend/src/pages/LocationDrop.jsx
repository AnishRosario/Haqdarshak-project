import React, { useEffect, useState } from 'react'
import Body from '../components/utils/Body'
import ContentCon from '../components/utils/ContentCon'
import Text from '../components/utils/Text'
import Dropdown from '../components/utils/Dropdown'
import Input from '../components/utils/Input'
import Button from '../components/utils/Button'
import{Country, State,City}from 'country-state-city'
import { useNavigate } from 'react-router-dom'

const LocationDrop = ({onNext,onPrev}) => {

      const changeNext=()=>{
        navigate('/otp')
      }
      const navigate=useNavigate();
      const changeBack=()=>{
        navigate('/login')
      }
    
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [districts, setDistricts] = useState([]);
    const[pincode,setPincode]=useState("")


    useEffect(() => {
      const countryCode = "IN";
      const fetchedStates = State.getStatesOfCountry(countryCode);
      setStates(fetchedStates);
    }, []);

    const handleStateChange = (stateCode) => {
        setSelectedState(stateCode);
        const fetchedDistricts = City.getCitiesOfState("IN", stateCode);
        setDistricts(fetchedDistricts);
      };
  return (
    <div>
        <Body onPrev={changeBack}>
            <Text text={"Where are you from?"}/>
            <ContentCon>
                <div className="content-section">
                <div className="card-content">
                <Dropdown name={"Select State"} options={states} onChange={(e)=>{handleStateChange(e.target.value)}}/>
                <Dropdown name={"Select District"} options={districts} disabled={!selectedState}/>
                <Input placeholder={"Pincode"}/>
                </div>
                </div>
                <div className="lanpage-btn">
                <Button text={"Next"} onClick={changeNext}/>
              </div>
            </ContentCon>
        </Body>
    </div>
  )
}

export default LocationDrop
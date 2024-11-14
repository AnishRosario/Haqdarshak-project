import React, { useEffect, useState } from 'react'
import Body from '../src/components/body/Body'
import ContentCon from '../src/components/contentCon/ContentCon'
import Text from '../src/components/body/text/text'
import Dropdown from '../src/components/Dropdown/Dropdown'
import Input from '../src/components/inputs/Input'
import Button from '../src/components/button/Button'
import{Country, State,City}from 'country-state-city'

const LocationDrop = ({onPrev}) => {
    
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
        <Body onPrev={onPrev}>
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
                <Button text={"Next"}/>
              </div>
            </ContentCon>
        </Body>
    </div>
  )
}

export default LocationDrop
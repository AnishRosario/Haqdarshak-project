
import Lanpage from './pages/Lanpage'
import LocationDrop from './pages/LocationDrop'
import Login from './pages/login'
import Mobile from './pages/Mobile'
import './App.css'
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MapScreen from './pages/Map'
import PersonalDetails from './pages/PersonalDetails'


function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const beforeStep=()=>{
    setCurrentStep((prevStep)=> prevStep - 1);
  }

  // const steps = [
  //   <Lanpage onNext={nextStep} />,
  //   <Login onNext={nextStep} onPrev={beforeStep}/>,
  //   <Mobile onNext={nextStep} onPrev={beforeStep} />,
  //   <LocationDrop onNext={nextStep} onPrev={beforeStep}  />,
  // ];
  
  return (
    <>
  {/* {
    steps[currentStep]
  } */}
  <Routes>
    <Route path='/' element={<Lanpage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/location' element={<LocationDrop/>}/>
    <Route path='/otp' element={<Mobile/>}/>
    <Route path='/personal' element={<PersonalDetails/>}/>  
  </Routes>
   
    </>
  );
}

export default App;


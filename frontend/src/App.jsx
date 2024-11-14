
import Lanpage from '../pages/Lanpage'
import LocationDrop from '../pages/LocationDrop'
import Login from '../pages/login'
import Mobile from '../pages/Mobile'
import './App.css'
import { useState } from 'react'


function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const beforeStep=()=>{
    setCurrentStep((prevStep)=> prevStep - 1);
  }

  const steps = [
    <Lanpage onNext={nextStep} />,
    <Login onNext={nextStep} onPrev={beforeStep}/>,
    <Mobile onNext={nextStep} onPrev={beforeStep} />,
    <LocationDrop onNext={nextStep} onPrev={beforeStep}  />
  ];

  return (
  <>{
    steps[currentStep]
    }</>
  );
}

export default App;


import './App.css'
import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import InfoL from './components/InfoL';
import Plans_pricing from './components/Plans_pricing';
import GettingStarted from './components/GettingStarted';
import Dispatch from './components/Dispatch';
import FinalData from './components/FinalData';
import FAQs from './components/FAQ';
import Contact from './components/Contact';

function App() {
  const [finalData, setFinalData] = useState({});
    const contactRef = useRef(null);
  return (
    <>  
    <Navbar/>
    <LandingPage/>
    <InfoL/>
    <Plans_pricing/>
    <GettingStarted/>
    <Dispatch/>
    <FinalData setFinalData={setFinalData} contactRef={contactRef} />
    <FAQs/>
    <Contact ref={contactRef} finalData={finalData} />
    </>
  )
}

export default App;

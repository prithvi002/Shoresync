import Header from './components/Header';
import Footer from './components/Footer';
import LandUseForm from './components/LandUseForm';
import ShorelineFeaturesForm from './components/ShorelineFeatures';
import React from 'react';
import { useState, useEffect } from 'react';
import BankAttributesForm from './components/BankAttributesForm';
import FinalSubmitForm from './components/FinalSubmitForm'

function App() {

  const [formComponent, setFormComponent] = useState(0);

  useEffect(() => {
    // Set the initial value of formComponent when the component mounts
    var component = sessionStorage.getItem('formComponent');
    console.log("hi", component);

    if(component === null) {
      component = 0
    }
    setFormComponent(parseInt(component)); // Set it to 1 or any other initial value as needed

  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='page'>
      <Header /> 
      {formComponent === 0 && <LandUseForm setFormComponent={setFormComponent} />}
      {formComponent === 1 && <BankAttributesForm setFormComponent={setFormComponent}/>}
      {formComponent === 2 && <ShorelineFeaturesForm setFormComponent={setFormComponent}/>}
      {formComponent === 3 && <FinalSubmitForm setFormComponent={setFormComponent}/>}

      {/* <LandUseForm /> */}
      <Footer/>
    </div>
  );
};


export default App;

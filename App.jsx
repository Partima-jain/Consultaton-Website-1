import { useState } from 'react';
import React from 'react';
import  Navbar  from './Components/Navbar/Navbar';
import  Background from './Components/Background/Background';
import Runner from './Components/Runner/Runner'
import Events from './Components/Events/Events'
import Services from './Components/Services/Services'
import Club from './Components/Club/Club'
import Footer from './Components/Footer/Footer'
import Business from './Components/Business/Business'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <Runner/>
      <Club/>
      <Events/>
      <Services/>
      <Business/>
      
      <Footer/>
    </div>
  );
};

export default App;

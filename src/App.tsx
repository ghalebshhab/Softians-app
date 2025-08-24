import React from 'react';
import './App.css';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Test from './Test';
import Test3 from './Test3';
import Software from './Majors/Software';
import Cyper from './Majors/Cyper';
import Artifitial from './Majors/Artifitial';
import Computers from './Majors/Computers';
import LightRays from './Animation/LightRays';
import Mobileapp from './Mobileapp';
function App() {
  return (
    
   <>
    
    <Routes>
        <Route path="/" element={<Test3/>} />
        <Route path="/Software" element={<Software />} />
        <Route path="/Cyper" element={<Cyper />} />
        <Route path="/Artificial" element={<Artifitial />} />
        <Route path="/Computers" element={<Computers />} />
        <Route path='/Mobileapp' element={<Mobileapp/>}/>
        <Route path="*" element={<div>Page not Found </div>} />

      </Routes>
   </>
  );
}

export default App;

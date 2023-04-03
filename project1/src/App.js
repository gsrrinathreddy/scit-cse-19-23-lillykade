import React from 'react'
import {Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutme from './Pages/Aboutme';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';
import Qualifications from './Pages/Qualifications';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contactme from './Pages/Contactme';
import Certifications from './Pages/Certifications';
import Workshops from './Pages/Workshops';
import './App.css';
import { Card } from '@mui/material';

function App() {
  return (
    <div className="App">
     <INavbar/>
     <Card/>
     <Routes>

      <Route path="Aboutme" element ={<Aboutme/>}/>
      <Route path="Hobbies" element ={<Hobbies/>}/>
      <Route path="Skills" element ={<Skills/>}/>
      <Route path="Qualifications" element ={<Qualifications/>}/>
      <Route path="Experience" element ={<Experience/>}/>
      <Route path="Projects" element ={<Projects/>}/>
      <Route path="Contactme" element ={<Contactme/>}/>
      <Route path="Certifications" element ={<Certifications/>}/>
      <Route path="Workshops" element ={<Workshops/>}/>

      </Routes>
      
    </div>
      );
}

export default App;

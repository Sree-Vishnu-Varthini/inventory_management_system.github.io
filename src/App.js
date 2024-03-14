import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route , Routes} from "react-router-dom";

import NavBar from './Components/NavBar';
import Inventory from './Components/Inventory';
import Stationery from './Components/Stationery';
import Electronics from './Components/Electronics';
import Footwear from './Components/Footwear';
import Signinup from './Components/Signinup';
import Home from './Components/Home';
import Crud from './Components/Crud';
import Dashboard from './Components/Dashboard';


function App() {

  const[showNavBar, setShowNavBar]=useState(true);
  const[showInventory, setInventory]=useState(true);
  const[showElectronics, setElectronics]=useState(true);
  const[showStationery, setStationery]=useState(true);
  const[showFootwear, setFootwear]=useState(true);

  return (
    <div className='main'>
      <NavBar/>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Signinup" element={<Signinup/>}/>
            <Route path="/Inventory" element={<Inventory/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Crud" element={<Crud/>}/>
            <Route path="/Footwear" element={<Footwear/>}/>
            <Route path="/Electronics" element={<Electronics/>}/>
            <Route path="/Stationery" element={<Stationery/>}/>

      </Routes>
      {/* {
            showNavBar === true?(<NavBar />):<h1>No NavBar</h1>
      }

      {
            showInventory === true?(<Inventory />):<h1>No Inventory</h1>
      }

      {
            showElectronics === true?(<Electronics />):<h1>No Inventory</h1>
      }

      {
            showStationery === true?(<Stationery />):<h1>No Inventory</h1>
      }

      {
            showFootwear === true?(<Footwear />):<h1>No Inventory</h1>
      } */}
    </div>
  );
}

export default App;

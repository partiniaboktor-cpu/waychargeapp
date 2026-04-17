import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Verfication from './Pages/Verfication';
import CreateAcc from './Pages/CreateAcc';
import Addcar from './Pages/Addcar';
import Selectcharger from './Pages/Selectcharger';
import Pushlocation from './Pages/pushlocation';
import Pushnotification from './Pages/Pushnotification';
import Scan from './Pages/Scan';
import Home from './Pages/Home';
import Connectplug from './Pages/Connectplug';
import Chargertypes from './Pages/Chargertypes';
import Charging from './Pages/Charging';
import Stopcharging from './Pages/Stopcharging';
import Coffee from './Pages/Coffee';
import Coffeedetail from './Pages/Coffeedetail';
import Payment from './Pages/Payment';

const RoutingApp = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home /> } />
      <Route path='/Login' element={<Login /> } />
      <Route path='/Verfication' element={<Verfication /> } />
      <Route path='/CreateAcc' element={<CreateAcc /> } />
      <Route path='/Addcar' element={<Addcar /> } />
      <Route path='/Selectcharger' element={<Selectcharger /> } />
      <Route path='/Pushlocation' element={<Pushlocation /> } />
      <Route path='/Pushnotification' element={<Pushnotification /> } />
      <Route path='/Scan' element={<Scan /> } />
      <Route path='/Connectplug' element={<Connectplug /> } />
      <Route path='/Chargertypes' element={<Chargertypes /> } />
      <Route path='/Charging' element={<Charging /> } />
      <Route path='/Stopcharging' element={<Stopcharging /> } />
      <Route path='/Coffee' element={<Coffee /> } />
      <Route path='/Coffeedetail' element={<Coffeedetail /> } />
      <Route path='/Payment' element={<Payment /> } />

    </Routes>
    </BrowserRouter>
    </>
    );
}
 
export default RoutingApp;

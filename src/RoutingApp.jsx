import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./Pages/Splash";
import Onboarding from "./Pages/Onboarding";
import Login from "./Pages/Login";
import Verfication from "./Pages/Verfication";
import CreateAcc from "./Pages/CreateAcc";
import Addcar from "./Pages/Addcar";
import Selectcharger from "./Pages/Selectcharger";
import Pushlocation from "./Pages/pushlocation";
import Pushnotification from "./Pages/Pushnotification";
import Scan from "./Pages/Scan";
import Home from "./Pages/Home";
import Connectplug from "./Pages/Connectplug";
import Chargertypes from "./Pages/Chargertypes";
import Charging from "./Pages/Charging";
import Stopcharging from "./Pages/Stopcharging";
import Coffee from "./Pages/Coffee";
import Coffeedetail from "./Pages/Coffeedetail";
import Payment from "./Pages/Payment";
import Visacard from "./Pages/Visacard";
import PaymentHistory from "./Pages/Paymenthistory";
import NotificationInbox from "./Pages/NotificationInbox";
import Points from "./Pages/Points";
import Request from "./Pages/Request";
import Location from "./Pages/Location";
import Profile from "./Pages/Profile";
import Requestconfirmation from "./Pages/Requestconfirmation";
import Paymentconfirmation from "./Pages/Paymentconfirmation";
import Bookings from "./Pages/Bookings";
import Bookcharger1 from "./Pages/Bookcharger1";

const RoutingApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/Onboarding" element={<Onboarding />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Verfication" element={<Verfication />} />
          <Route path="/CreateAcc" element={<CreateAcc />} />
          <Route path="/Addcar" element={<Addcar />} />
          <Route path="/Selectcharger" element={<Selectcharger />} />
          <Route path="/Pushlocation" element={<Pushlocation />} />
          <Route path="/Pushnotification" element={<Pushnotification />} />
          <Route path="/Scan" element={<Scan />} />
          <Route path="/Connectplug" element={<Connectplug />} />
          <Route path="/Chargertypes" element={<Chargertypes />} />
          <Route path="/Charging" element={<Charging />} />
          <Route path="/Stopcharging" element={<Stopcharging />} />
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/Coffeedetail" element={<Coffeedetail />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Visacard" element={<Visacard />} />
          <Route path="/Notifications" element={<NotificationInbox />} />
          <Route path="/PaymentHistory" element={<PaymentHistory />} />
          <Route path="/Points" element={<Points />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Requestconfirmation" element={<Requestconfirmation />} />
          <Route path="/Paymentconfirmation" element={<Paymentconfirmation />} />
          <Route path="/Bookings" element={<Bookings />} />
          <Route path="/Bookcharger1" element={<Bookcharger1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingApp;

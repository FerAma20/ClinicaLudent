import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clients from './pages/Clients/Clients'
import NextAppointment from "./pages/Appointment/NextApointment";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
     <div className="flex gap-6">
      <Home />

        

      <Routes>
        <Route path="/Customers" element={<Clients />} />
        <Route path="/NextAppointment" element={<NextAppointment />} />
      </Routes>

     
    </div>
    <Footer/>
    </>
   
  );
};

export default App;

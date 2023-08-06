import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clients from './pages/Clients/Clients'
import NextAppointment from "./pages/Appointment/NextApointment";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Shared/Sidebar";
import Index from "./pages/Index";

const App = () => {
  return (
    <>
     <div>
     <div className="text-center m-5">
   <svg class="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 12" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1h14M1 6h14M1 11h7"/>
  </svg>
</div>
      <Sidebar />

      

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Customers" element={<Clients />} />
        <Route path="/NextAppointment" element={<NextAppointment />} />
      </Routes>

     
    </div>
    <Footer/>
    </>
   
  );
};

export default App;

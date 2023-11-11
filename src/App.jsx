import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Clients from './pages/Clients/Clients'
import NextAppointment from "./pages/Appointment/NextApointment"
import Footer from "./pages/Footer"
import Sidebar from "./pages/Shared/Sidebar"
import Navbar from "./pages/Shared/Navbar"
import LogIn from "./pages/Shared/LogIn"

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Customers" element={<Clients />} />
          <Route path="/NextAppointment" element={<NextAppointment />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App

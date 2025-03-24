import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Cabins from './components/Cabins.jsx'
import Calendar from './components/Calendar.jsx'
const App = () =>{
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      </Router>
    </>
  )
}
export default App

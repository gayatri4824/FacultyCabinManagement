import { useState } from 'react'
import './App.css'
import Homepage from './homepage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Cabins from './Cabins.jsx'
import Calendar from './Calendar.jsx'
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

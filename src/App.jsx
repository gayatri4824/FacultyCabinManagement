import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Cabins from './Cabins.jsx'
import Calendar from './Calendar.jsx'
const App = () =>{
  return (
    <>
      <Navbar />
      <Cabins />
      <Calendar />
    </>
  )
}
export default App

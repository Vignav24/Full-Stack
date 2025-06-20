import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './Skills.jsx'
import Welcome from './Welcome.jsx'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Service.jsx'
import Navbar from './components/Navbar.jsx'
import Form from './hooks/Form.jsx'
import State from './hooks/State.jsx'
import Effect from './hooks/Effect.jsx'
import Post from './hooks/post.jsx'
 

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path='/state' element={<State/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/Effect' element={<Effect/>}></Route>
      <Route path='/Post' element={<Post/>}></Route>
    </Routes>
    </>
  )
} 
export default App
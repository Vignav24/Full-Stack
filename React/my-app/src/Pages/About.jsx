import React from 'react'
import State from '../hooks/State'
import { Link } from "react-router-dom"
const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Link to='/state'>useState Example</Link><br />
      <Link to='/form'>Contolled Form</Link><br />
      <Link to='/Effect'>useEffect</Link><br />
      <Link to='/Post'>usepost</Link>
    </div>
  )
}

export default About
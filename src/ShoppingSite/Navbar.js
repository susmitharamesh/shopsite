import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Login from './Login'
// import Weather from './weather'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>HOME</Link>
      <Link to='/About'>ABOUT</Link>
      <Link to='/login'>LOGIN</Link>
      <Link to='/weather'>WEATHER</Link>

    </div>
  )
}

export default Navbar

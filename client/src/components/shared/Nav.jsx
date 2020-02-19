import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Nav.css'

const Nav = props => (
  <div className='nav'>
    <div className='nav-top'>
      <div className='nav-top-left'>
        <h1 className='big-logo'>STELLAR</h1>
        <Link to='#' className='join-rewards nav-link'>Join Rewards</Link>
      </div>
      <nav className='nav-user'>
        <Link to='#' className='list-property nav-link'>List your property</Link>
        <Link to='#' className='nav-link'>Account</Link>
        <Link to='#' className='nav-link'>My lists</Link>
      </nav>
      <div className='hamburger-box'>
        <p className='hamburger-rect'></p>
        <p className='hamburger-rect'></p>
        <p className='hamburger-rect'></p>
      </div>
    </div>
    <nav className='nav-main'>
      <Link to='#' className='nav-link'>Hotels</Link>
      <Link to='#' className='nav-link'>Flights</Link>
      <Link to='#' className='nav-link'>Vacation Packages</Link>
      <Link to='#' className='nav-link'>Cars</Link>
      <Link to='#' className='nav-link'>Vacation Rentals</Link>
      <Link to='#' className='nav-link'>Cruises</Link>
      <Link to='#' className='nav-link'>Things to do</Link>
      <Link to='#' className='nav-link'>Deals</Link>
      <Link to='#' className='nav-link'>Mobile</Link>
      <Link to='#' className='nav-link'>Rewards</Link>
      <Link to='#' className='nav-link'>Travel Blog</Link>
    </nav>
  </div>
)

export default Nav

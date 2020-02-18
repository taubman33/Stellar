import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Home.css'
import HomeForm from '../HomeForm'



function Home(props) {
  return (
    <div className="home">
      <div className='home-container'>
        <div className="home-row">
          <Link to="#" className='home-row-button home-selected'>
            <img src={require('../../assets/airplane.svg')} alt='airplane-icon'/>
            <p>Flights</p>
          </Link>
          <Link to="#" className='home-row-button'>
            <img src={require('../../assets/hotel.svg')} alt='hotel-icon'/>
            <p>Hotels</p>
          </Link>
          <Link to="#" className='home-row-button'>
              <div>
                <img src={require('../../assets/airplane.svg')} alt='airplane-icon'/>
                <img src={require('../../assets/hotel.svg')} alt='hotel-icon'/>
              </div>
              <p>Packages</p>
          </Link>
          <Link to="#" className='home-row-button'>
            <img src={require('../../assets/car.svg')} alt='car-icon'/>
            <p>Cars</p>
          </Link>
          <Link to="#" className='home-row-button'>
            <img src={require('../../assets/cruise.svg')} alt='cruise-icon'/>
            <p>Cruises</p>
          </Link>
          <Link to="#" className='home-row-button'>
            <img src={require('../../assets/camera.svg')} alt='activities-icon'/>
            <p>Activities</p>
          </Link>
        </div>
        <HomeForm date={props.date} handleHomeSubmit={props.handleHomeSubmit} handleDateChange={props.handleDateChange} />
      </div>
    </div>
  )
}

export default Home

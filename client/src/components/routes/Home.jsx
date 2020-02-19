import React from 'react'
import { Link } from 'react-router-dom'
import HomeForm from '../HomeForm'



function Home(props) {
    return (
        <div className="home">
            <div className="home-row">
                <Link to="#">
                    <img src={require('../../assets/airplane.svg')} />
                    Flights
                </Link>
                <Link to="#">
                    <img src={require('../../assets/hotel.svg')} />
                    Hotels
                </Link>
                <Link to="#">
                    <img src={require('../../assets/airplane.svg')} />
                    <img src={require('../../assets/hotel.svg')} />
                    Packages
                </Link>
                <Link to="#">
                    <img src={require('../../assets/car.svg')} />
                    Cars
                </Link>
                <Link to="#">
                    <img src={require('../../assets/cruise.svg')} />
                    Cruises
                </Link>
                <Link to="#">
                    <img src={require('../../assets/camera.svg')} />
                    Activities
                </Link>
            </div>
            <HomeForm  history={props.history} date={props.date} handleHomeSubmit={props.handleHomeSubmit} handleDateChange={props.handleDateChange} handleHovering={props.handleHovering} />
        </div>
    )
}

export default Home

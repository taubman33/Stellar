import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
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
        </div>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Home.css'


function Home() {
    return (
        <div className="home">
            <div className='home-container'>
                <div className="home-row">
                    <Link to="#" className='home-row-button home-selected'>
                        <img src={require('../../assets/airplane.svg')} />
                        <p>Flights</p>
                    </Link>
                    <Link to="#" className='home-row-button'>
                        <img src={require('../../assets/hotel.svg')} />
                        <p>Hotels</p>
                    </Link>
                    <Link to="#" className='home-row-button'>
                        <div>
                            <img src={require('../../assets/airplane.svg')} />
                            <img src={require('../../assets/hotel.svg')} />
                        </div>
                        <p>Packages</p>
                    </Link>
                    <Link to="#" className='home-row-button'>
                        <img src={require('../../assets/car.svg')} />
                        <p>Cars</p>
                    </Link>
                    <Link to="#" className='home-row-button'>
                        <img src={require('../../assets/cruise.svg')} />
                        <p>Cruises</p>
                    </Link>
                    <Link to="#" className='home-row-button'>
                        <img src={require('../../assets/camera.svg')} />
                        <p>Activities</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home

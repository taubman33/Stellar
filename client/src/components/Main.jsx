import React from 'react'
import Nav from './shared/Nav'
import Home from './routes/Home'
import TripReview from './routes/TripReview'
import Book from './routes/Book'
import Flights from './routes/Flights'
import Confirmation from './routes/Confirmation'
import Loading from './Loading'
import EcoPopup from './shared/EcoPopup'
import { Route } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import HomeBackend from './routesBackEnd/HomeBackend'
import User from './routesBackEnd/User'
import Users from './routesBackEnd/Users'
import UserCreate from './routesBackEnd/UserCreate'
import UserEdit from './routesBackEnd/UserEdit'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: {
                departure: moment().format('YYYY-MM-DD'),
                return: moment().add(1, 'd').format('YYYY-MM-DD')
            },
            passengers: {
                adults: 1,
                children: 0
            },
            itinerary: {
                numberOfAdults: null,
                numberOfChildren: null,
                departureDate: '',
                returnDate: '',
                directFlight: null,
                ecoFriendly: false,
                flyingFrom: null,
                flyingTo: null,
            },
            flights: {
                departing: [],
                arriving: []
            },
            bookedFlights: {
                departing: {},
                arriving: {}
            },
            showEcoPopup: false,
            donation: false
        }
    }


    handleHomeSubmit = (values, history) => {
        this.setState({
            itinerary: {
                numberOfAdults: values.adults,
                numberOfChildren: values.children,
                departureDate: values.departureDate,
                returnDate: values.returnDate,
                directFlight: values.directFlights,
                ecoFriendly: values.ecoFriendly,
                flyingFrom: values.flyingFrom,
                flyingTo: values.flyingTo
            }
        })
        history.push('/flights')
    }

    handleEcoClick = event => {
      event.preventDefault()
      console.log('ecoClick', !this.state.showEcoPopup)
      this.setState({
        showEcoPopup: this.state.showEcoPopup ? false : true
      })
    }

    handleDateChange = event => {
        this.setState({
            date: {
                ...this.state.date,
                [event.target.name]: event.target.value
            }
        })
    }

    setFlightDetails = (flightDetails, flightDirection, history) => {
        this.setState(
            {bookedFlights: {...this.state.bookedFlights, [flightDirection]: flightDetails}}
        )
        if(flightDirection === 'arriving') {
            history.push('/trip-review')
        }
    }


    finalDetails = (history) => {
        history.push('/booking')
    }

    handleDonationInput = (event) => {
        event.preventDefault()
        this.setState({
            donation: !this.state.donation
        })

    }

    async componentDidMount() {
        const departing = await axios('http://localhost:3000/api/departingFlights/')
        const arriving = await axios('http://localhost:3000/api/arrivingFlights/')
        this.setState({
            flights: {
                departing: departing.data,
                arriving: arriving.data
            }
        })
    }

    render() {
        return (
            <div className="main">
                <Nav />
                <Route exact path="/" component={(navProps) => <Home {...navProps} date={this.state.date} handleHomeSubmit={this.handleHomeSubmit} handleDateChange={this.handleDateChange} handleEcoClick={this.handleEcoClick} />} />
                <Route exact path="/flights" component={(navProps) => <Flights {...navProps} requestInfo={this.state} setFlightDetails={this.setFlightDetails}/>} />
                <Route exact path="/trip-review" component={(navProps) => <TripReview {...navProps} bookedFlights={this.state.bookedFlights} itinerary={this.state.itinerary} finalDetails={this.finalDetails}/>} />
                <Route exact path="/booking" component={(navProps) => <Book {...navProps} bookedFlights={this.state.bookedFlights} itinerary={this.state.itinerary} handleDonationInput={this.handleDonationInput} donation={this.state.donation}/>} />
                <Route exact path="/confirmation" >
                    <Confirmation />
                </Route>
                <Route exact path="/users"> 
                  <HomeBackend/>
                  <User/>
                  <Users/>
                  <UserEdit/>
                  <UserCreate/>
                </Route>
                {this.state.showEcoPopup ? <EcoPopup handleEcoClick={this.handleEcoClick}/> : <></>}
            </div>
        )
    }
}


export default Main

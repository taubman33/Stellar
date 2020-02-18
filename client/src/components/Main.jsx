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

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: {
                departure: moment().format('YYYY-MM-DD'),
                return: moment().format('YYYY-MM-DD')
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
                ecoFriendly: null
            },
            redirect: false
        }
    }

<<<<<<< HEAD

    handleHomeSubmit = values => {
        console.log(values)
=======
    handleHomeSubmit = (values, history) => {
        this.setState({
            itinerary: {
                numberOfAdults: values.adults,
                numberOfChildren: values.children,
                departureDate: values.departureDate,
                returnDate: values.returnDate,
                directFlight: values.directFlights,
                ecoFriendly: values.ecoFriendly
            },
            redirect: true
        })
        history.push('/flights')
>>>>>>> integration
    }

    handleDateChange = event => {
        this.setState({
            date: {
                ...this.state.date,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <div className="Main">
                <Nav />
                <Route exact path="/" component={(navProps) => <Home {...navProps} date={this.state.date} handleHomeSubmit={this.handleHomeSubmit} handleDateChange={this.handleDateChange} /> } />

                <Route exact path="/flights">
                    <Flights requestInfo={this.state} />
                </Route>
                <Route exact path="/trip-review">
                    <TripReview />
                </Route>
                <Route exact path="/booking">
                    <Book />
                </Route>
                <Route exact path="/confirmation">
                    <Confirmation />
                </Route>
            </div>
        )
    }
}


export default Main

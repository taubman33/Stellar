import React from 'react'
import Nav from './shared/Nav'
import Home from './routes/Home'
import TripReview from './routes/TripReview'
import Book from './routes/Book'
import Flights from './routes/Flights'
import Confirmation from './routes/Confirmation'
import Route from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    render() {
        return (
            <div className="Main">
                <Nav />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/flights">
                    <Flights />
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
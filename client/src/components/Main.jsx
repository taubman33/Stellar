import React from 'react'
import Nav from './shared/Nav'
import Home from './routes/Home'
import TripReview from './routes/TripReview'
import Book from './routes/Book'
import Flights from './routes/Flights'
import Confirmation from './routes/Confirmation'

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
                <Home />
                <TripReview />
                <Book />
                <Flights />
                <Confirmation />
            </div>
        )
    }
}

export default Main
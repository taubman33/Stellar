import React from 'react'
import '../../css/Flights.css'
import { Formik, Form, Field } from 'formik'
import moment from 'moment'

export default function Flights(props) {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0)

  const makeFlightCards = (flights, flightDirection) => {
    console.log(flightDirection)
    const flightList = flights[`${flightDirection}Flight`].filter(flight =>
      flight[`${(flightDirection === 'departing') ? 'depart' : 'arrival'}_airport`] === props.requestInfo.itinerary.flyingFrom 
      && flight[`${(flightDirection === 'departing') ? 'arrival' : 'depart'}_airport`] === props.requestInfo.itinerary.flyingTo 
      && ((props.requestInfo.itinerary.ecoFriendly) ? (props.requestInfo.itinerary.ecoFriendly === flight.eco) : true)).map((flight, key) => {
        const flightDetails = {
        departingTime: moment(flight.depart_time).format('h:mm a'),
        arrivingTime: moment(flight.arrival_time).format('h:mm a'),
        airline: flight.airline,
        flightDuration: moment(flight.arrival_time).diff(flight.depart_time,'hours'),
        departAirport: flight.depart_airport,
        arrivalAiport: flight.arrival_airport,
        flightPrice: flight.price,
        ecoFriendly: flight.eco 
      }
      console.log(flight)
        return (
        <div key={key}>        
          <p>{`${flightDetails.departingTime} - ${flightDetails.arrivingTime}`}</p>
          <p>{flightDetails.airline}</p>
          <p>Excellent Flight (8.7/10)</p>
          <p>{flightDetails.flightDuration}h (Nonstop) </p>
          <p>{`${flightDetails.departAirport} - ${flightDetails.arrivalAiport}`}</p>        
          <p>{`+ $${flightDetails.flightPrice}`}</p>
          <p>Roundtrip</p>
          <p>Free cancel within 24 hrs</p>
          {flightDetails.ecoFriendly && <img src={require('../../assets/noun-leaf.svg')} alt='leaf-icon' className="leaf-icon" />}
          {flightDetails.ecoFriendly && <p>Eco Flight</p>}
          <button onClick={() => {
            props.setFlightDetails(flightDetails, flightDirection, props.history)
            if (flightDirection === 'departing') {
              flightDirection = 'arriving'
              forceUpdate()
            }
            }}>Select</button>
          <p>Details & baggage fees</p>
          <p>Rules and restrictions apply</p>
        </div>)
        }
      )
      return flightList
  }

  const flights = (props.requestInfo.bookedFlights.departing.departingTime ?
    props.requestInfo.flights.arriving : props.requestInfo.flights.departing)
  const flightDirection = (props.requestInfo.bookedFlights.departing.departingTime ?
    'arriving' : 'departing')

  return (
    <div className="flights">
      <div className='flights-header-bar'>
        <span></span>
        <p>{`New York (NYC) to Los Angeles (LAX)`}</p>
        <p>{`Fri, Mar 20 - Sun, Mar 22`}</p>
        <p>{`1 Traveller`}</p>
      </div>
      <div className="choose-container">
        <img src={require('../../assets/checkbox.svg')} alt='checkbox-circle' className="checkbox-circle" />
        <p>Choose your hotel<span className='flight-right-caret'> ></span></p>
        <img src={require('../../assets/checkbox.svg')} alt='checkbox-circle' className="checkbox-circle" />
        <p>Choose your room<span className='flight-right-caret'> ></span></p>
        <img src={require('../../assets/airplane-circle.svg')} alt='airplane-circle' className="airplane-circle" />
        <p>Choose your departure flight<span className='flight-right-caret'> ></span></p>
        <img src={require('../../assets/airplane-circle.svg')} alt='airplane-circle' className="airplane-circle" />
        <p>Choose your return flight</p>
      </div>
      <div className="hotel-container">
        <div className="image-container">
          <img src={require('../../assets/noun-leaf.svg')} alt='leaf-icon' className="leaf-icon" />
          <img src={require('../../assets/hotel.png')} alt='hotel-icon' className="hotel-icon" />
        </div>
        <div className="hotel-basic-info-container">
          <p className="hotel-name">City of Stars Hotel</p>
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <p className="flight-dates">Fri, Mar 20 - Sun, Mar 22</p>
        </div>
        <div className="price-container">
          <span className='hotel-price-line'>
            <p className="starting-price">Starting Price</p>
            <p className="starting-price-amount">$512.26</p>
          </span>
          <span className='hotel-price-line'>
            <p className="eco-package-savings">Eco Package Savings</p>
            <p className='eco-package-savings'>$10.81</p>
          </span>
          <span className='hotel-price-line hotel-price-divider'>
            <p>&nbsp;</p>
          </span>
          <span className='hotel-price-line'>
            <p className="total-trip-price">Total trip price</p>
            <p className='total-trip-price-amount'>$501.45</p>
          </span>
        </div>
      </div>
      <div className='flight-mid-bar'>
        <div className='flight-mid-bar-select'>
          <p className='select-flight-title'>Select your departure to Los Angeles</p>
          <p className='select-flight-title-date'>Fri, Mar 20</p>
          <p className='change-flight-container'>Change <a href='/' className='change-flight'>departure</a> or <a href='/' className='change-flight'>return</a> flight</p>
        </div>
        <p className='price-disclaimer'>The trip prices shown are per person and include Flight + Hotel, taxes & fees. Flights include e-tickets, but do not include baggage fees or other fees charged directly by the airline.</p>
      </div>
      <div className="sort-filter-container">
        <div className='sort-filter-toprow'>
          <p className='sort-filter-biglabel'>Sort & Filter</p>
          <p className='clear-filter'>Clear</p>
        </div>
        <p className='sort-filter-checkbox'>Sort By</p>
        <Formik>
          <Form>
            <Field as="select" name="filter" className='sort-filter-filter'>
              <option value="lowest">Price (Lowest)</option>
            </Field>
            <p className='sort-filter-biglabel'>Stops</p>
            <div className='sort-filter-checkbox'>
              <Field type="checkbox" name="nonStop" />
              <p>Non-Stop (52)</p>
            </div>
            <div className='sort-filter-checkbox'>
              <Field type="checkbox" name="oneStop" />
              <p>1 Stop (28)</p>
            </div>
            <p className='sort-filter-biglabel'>Airlines included</p>
            <div className='sort-filter-checkbox'>
              <Field type="checkbox" name="jetblue" />
              <p>JetBlue Airways (12)</p>
            </div>
            <div className='sort-filter-checkbox'>
              <Field type="checkbox" name="united" />
              <p>United (15)</p>
            </div>
          </Form>
        </Formik>
        {makeFlightCards(flights, flightDirection)}
      </div>
    </div>
  )
}

import React from 'react'
import '../../css/TripReview.css'
import moment from 'moment'
import Receipt from '../shared/Receipt'

export default function TripReview(props) {
  return (
    <div className='trip-review'>
      <div className='trip-review-header'>
        <p className='trip-review-header-title'>{`Your trip to San Francisco`}</p>
        <p className='trip-review-header-guarantee'><img alt='green-check' src={require('../../assets/check.svg')} />Price Guarantee</p>
      </div>
      <main className='trip-review-main'>
        <div className='trip-review-main-top'>
          <img alt='airplane-circle' src={require('../../assets/airplane-circle.svg')} className='trip-review-airplane-icon' />
          <div className='trip-review-main-top-aside'>
            <p className='trip-review-top-dates'>{`${moment(props.itinerary.departureDate).format('ddd, MMM [] D')} - ${moment(props.itinerary.returnDate).format('ddd, MMM [] D')} `}</p>
            <p className='trip-review-top-details'>{`Roundtrip - 1 traveler`}</p>
          </div>
        </div>
        <div className='trip-review-flights-container'>
          <div className='trip-review-flight-details'>
            <div className='trip-review-flight-details-left'>
              <p>{`${props.bookedFlights.departing.departingTime} - ${props.bookedFlights.departing.arrivingTime}`}</p>
              <p className='trip-review-airline-name'>{props.bookedFlights.departing.airline}</p>
            </div>
            <div className='trip-review-flight-details-right'>
              <p>{`${props.bookedFlights.departing.flightDuration}h (Nonstop)`}</p>
              <p>{`${props.bookedFlights.departing.departAirport} to ${props.bookedFlights.departing.arrivalAiport}`}</p>
            </div>
          </div>
          <div className='trip-review-flight-details'>
            <div className='trip-review-flight-details-left'>
              <p>{`${props.bookedFlights.arriving.departingTime} - ${props.bookedFlights.arriving.arrivingTime}`}</p>
              <p className='trip-review-airline-name'>{props.bookedFlights.arriving.airline}</p>
            </div>
            <div className='trip-review-flight-details-right'>
              <p>{`${props.bookedFlights.arriving.flightDuration}h (Nonstop)`}</p>
              <p>{`${props.bookedFlights.arriving.departAirport} to ${props.bookedFlights.arriving.arrivalAiport}`}</p>
            </div>
          </div>
          <p className='trip-review-flight-details'>Details & baggage fees</p>
        </div>
        <div className='trip-review-change-flights'><p>Change Flights</p></div>
        <div className='trip-review-upgrade-container'>
          <p className='trip-review-upgrade-title'>Upgrade your flight</p>
          <div className='trip-review-upgrade-row'>
            <img alt='upgrade-ad-pic' src={require('../../assets/upgrade-pic.png')} />
            <div className='upgrade-ad'>
              <p>Enjoy more flexibility by upgrading</p>
              <div className='upgrade-stars'>
                <img src={require('../../assets/star.png')} alt='star-icon' className="star-icon" />
                <img src={require('../../assets/star.png')} alt='star-icon' className="star-icon" />
                <img src={require('../../assets/star.png')} alt='star-icon' className="star-icon" />
                <img src={require('../../assets/star.png')} alt='star-icon' className="star-icon" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className='trip-details-aside-container'>
        <Receipt tripDetails={props} />
        <button onClick={() => {props.finalDetails(props.history)}} type='submit' className='trip-review-submit'>
          Next: Final details
        </button>
      </aside>
    </div>
  )
}

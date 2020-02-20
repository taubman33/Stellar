import React from 'react'
import '../../css/Receipt.css'
import moment from 'moment'

export default function Receipt(props) {
  return (
    <div className='receipt-container'>
      <div className='receipt-card receipt-flight-container'>
        <img alt='eco-friendly' src={require('../../assets/noun-leaf.svg')} />
        <div className='receipt-flight-info-container'>
          <p className='receipt-card-title'>Roundtrip Flight</p>
          <p className='receipt-card-subtitle'>{`${props.tripDetails.itinerary.flyingFrom} - ${props.tripDetails.itinerary.flyingTo}`}</p>
          <p>{`${moment(props.tripDetails.itinerary.departureDate).format('ddd, MM/DD')} - ${moment(props.tripDetails.itinerary.returnDate).format('ddd, MM/DD')} `}</p>
          <p>1 ticket: 1 adult</p>
        </div>
      </div>
      <div className='receipt-card receipt-hotel-container'>
        <img alt='eco-friendly' src={require('../../assets/noun-leaf.svg')} />
        <div className='receipt-hotel-info-container'>
          <p className='receipt-card-title'>City of Stars Hotel</p>
          <p className='receipt-card-subtitle'>Downtown Los Angeles</p>
          <p>{`${moment(props.tripDetails.itinerary.departureDate).format('ddd, MM/DD')} - ${moment(props.tripDetails.itinerary.returnDate).format('ddd, MM/DD')} `}</p>
          <p>1 room: 2 nights</p>
        </div>
      </div>
      <div className='receipt-card receipt-price-container'>
        <div className='receipt-price-item receipt-start-price-container'>
          <p>Starting Price:</p>
          <p className='receipt-price-value'>{`$${(props.tripDetails.bookedFlights.departing.flightPrice + props.tripDetails.bookedFlights.arriving.flightPrice).toFixed(2)}`}</p>
        </div>
        <div className='receipt-price-item receipt-savings-price-container'>
          <p>Eco-Friendly Package savings:</p>
          <p className='receipt-price-value'>{`-$${((props.tripDetails.bookedFlights.departing.flightPrice + props.tripDetails.bookedFlights.arriving.flightPrice) * 0.05).toFixed(2)}`}</p>
        </div>
      </div>
      <div className='receipt-price-item receipt-total-price-container'>
        <p className='receipt-total-label'>Total due today:</p>
        <p className='receipt-price-value'>{`$${((props.tripDetails.bookedFlights.departing.flightPrice + props.tripDetails.bookedFlights.arriving.flightPrice) * 0.95).toFixed(2)}`}</p>
      </div>
    </div>
  )
}

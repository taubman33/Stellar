import React from 'react'

export default function Receipt(props) {
  return (
    <div className='receipt-container'>
      <div className='receipt-card receipt-flight-container'>
        <img alt='eco-friendly' src={require('../../assets/noun-leaf.svg')} />
        <div className='receipt-flight-info-container'>
          <p className='receipt-card-title'>Roundtrip Flight</p>
          <p className='receipt-card-subtitle'>JFK to LAX</p>
          <p>Fri, Mar 20 - Sun, Mar 22</p>
          <p>1 ticket: 1 adult</p>
        </div>
      </div>
      <div className='receipt-card receipt-hotel-container'>
        <img alt='eco-friendly' src={require('../../assets/noun-leaf.svg')} />
        <div className='receipt-hotel-info-container'>
          <p className='receipt-card-title'>City of Stars Hotel</p>
          <p className='receipt-card-subtitle'>Downtown Los Angeles</p>
          <p>Fri, Mar 20 - Sun, Mar 22</p>
          <p>1 room: 2 nights</p>
        </div>
      </div>
      <div className='receipt-card receipt-price-container'>
        <div className='receipt-start-price-container'>
          <p>Starting Price:</p>
          <p className='receipt-price-value'>$512.26</p>
        </div>
        <div className='receipt-savings-price-container'>
          <p>Eco-Friendly Package savings:</p>
          <p className='receipt-price-value'>-$10.81</p>
        </div>
      </div>
      <div className='receipt-total-price-container'>
        <p className='receipt-total-label'>Total due today:</p>
        <p className='receipt-price-value'>$501.45</p>
      </div>
    </div>
  )
}

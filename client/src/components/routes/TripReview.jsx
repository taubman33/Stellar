import React from 'react'
import '../../css/TripReview.css'

export default function TripReview() {
  return (
    <div className='trip-review'>
      <div className='trip-review-header'>
        <p className='trip-review-header-title'>{`Your trip to ${'Los Angeles'}`}</p>
        <p className='trip-review-header-guarantee'><img alt='green-check' src={require('../../assets/check.svg')} />Price Guarantee</p>
      </div>
      <main className='trip-review-main'>
        <div className='trip-review-main-top'>
          <img alt='airplane-circle' src={require('../../assets/airplane-circle.svg')} className='trip-review-airplane-icon' />
          <div className='trip-review-main-top-aside'>
            <p className='trip-review-top-dates'>{`Fri, Mar 20 - Sun, Mar 22`}</p>
            <p className='trip-review-top-details'>{`Roundtrip - 1 traveler`}</p>
          </div>
        </div>
        <div className='trip-review-flights-container'>
          <div className='trip-review-flight-details'>
            <div className='trip-review-flight-details-left'>
              <p>{`6:29pm - 9:34pm`}</p>
              <p className='trip-review-airline-name'>JetBlue Airways</p>
            </div>
            <div className='trip-review-flight-details-right'>
              <p>{`6h 5m (Nonstop)`}</p>
              <p>{`JFK to LAX`}</p>
            </div>
          </div>
          <div className='trip-review-flight-details'>
            <div className='trip-review-flight-details-left'>
              <p>{`12:30am - 9:08am`}</p>
              <p className='trip-review-airline-name'>JetBlue Airways</p>
            </div>
            <div className='trip-review-flight-details-right'>
              <p>{`5h 38m (Nonstop)`}</p>
              <p>{`LAX to JFK`}</p>
            </div>
          </div>
          <p>Details & baggage fees</p>
        </div>
        <p className='trip-review-change-flights'></p>
        <div className='trip-review-upgrade-container'>
          <p>Upgrade your flight</p>
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
      <button type='submit' className='trip-review-submit'>
        Next: Final details
      </button>
    </div>
  )
}

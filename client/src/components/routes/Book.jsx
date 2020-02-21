import React from 'react'
import Receipt from '../shared/Receipt'
import '../../css/Book.css'

export default function Book(props) {
  const roundedSum = (Math.round((props.bookedFlights.departing.flightPrice + props.bookedFlights.arriving.flightPrice) * 0.95)) + 1
  const totalSum = ((props.bookedFlights.departing.flightPrice + props.bookedFlights.arriving.flightPrice) * 0.95).toFixed(2)
  console.log(props)
  const [, forceUpdate] = React.useReducer(x => x + 1, 0)
  return (
    <div className='book-container'>
      <main className='book-main'>
        <p className='book-title'>Review and Book</p>
        <div className='book-cancellation'>
          <img src={require('../../assets/check.svg')} alt='green-check' />
          <p className='book-cancellation-text'>Free Cancellation within 24 hours</p>
        </div>
        <p className='book-details-title'>Your Trip Details</p>
        <div className="passenger-details">
        </div>
      </main>
      <aside className='trip-details-aside-container'>
        <Receipt tripDetails={props} />
        <div className="donation-container">
          <div className='book-donation-above book-donation-vertical-align'>
            <p className='book-donation-text'>Do you want to round up to {`$${roundedSum}`} by donating
             to one of the following organizations? </p>
            <label className='book-donation-text'>
              <input type="checkbox" name="yes-checkbox" onClick={(event) => {
                  props.handleDonationInput(event)
                  forceUpdate()
                }} value={props.donation} checked={props.donation}/>
              Yes! Donate my ${(roundedSum - totalSum).toFixed(2)} to:
            </label>
          </div>
          <div className="donation-row">
            {props.donation &&
              (<div className="donation-selection">
              <img src={require('../../assets/check.png')} alt="selection-check" className="selection-check" />
            </div>)}
            <div className='donation-icon-container'>
              <img src={require('../../assets/greenpeace.png')} alt='greenpeace-icon' className="donation-icon greenpeace-icon" />
            </div>
            <div className='donation-icon-container'>
              <img src={require('../../assets/unicef.png')} alt='unicef-icon' className="donation-icon unicef-icon" />
            </div>
            <div className='donation-icon-container'>
              <img src={require('../../assets/wwf.png')} alt='wwf-icon' className="donation-icon wwf-icon" />
            </div>
          </div>
          <label className='book-donation-text book-donation-vertical-align'>
            <input type="checkbox" name="no-checkbox" onClick={props.handleDonationInput} checked={!props.donation}/>
            No. Just keep my total to {`$${totalSum}`}</label>
          <button className='book-submit' type="submit" onClick={ () => {props.redirectItinerary(props.history)}}>Complete Booking ></button>
        </div>
      </aside>
    </div>
  )
}

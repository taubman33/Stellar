import React from 'react'
import Receipt from '../shared/Receipt'

export default function Book(props) {
  const roundedSum = (Math.round((props.bookedFlights.departing.flightPrice + props.bookedFlights.arriving.flightPrice) * 0.95)) + 1
  const totalSum = ((props.bookedFlights.departing.flightPrice + props.bookedFlights.arriving.flightPrice) * 0.95).toFixed(2)
  console.log(props)
  const [, forceUpdate] = React.useReducer(x => x + 1, 0)
  return (
    <div>
      <div className="passenger-details">
      </div>
      <aside className='trip-details-aside-container'>
        <Receipt tripDetails={props} />
        <div className="donation-container">
          <p>Do you want to round up to {`$${roundedSum}`} by donating
           to one of the following organizations? </p>
          <label>
            <input type="checkbox" name="yes-checkbox" onClick={(event) => {props.handleDonationInput(event)
            forceUpdate()}} value={props.donation} checked={props.donation}/>
            Yes! Donate my ${(roundedSum - totalSum).toFixed(2)} to:</label>
          <div className="donation-row">
            { props.donation && 
              (<div className="donation-selection">
              <img src={require('../../assets/rectangle.png')} alt="selection-rectangle" className="selection-rectangle" />
              <img src={require('../../assets/check.png')} alt="selection-check" className="selection-check" />
            </div>)}
            <img src={require('../../assets/greenpeace.png')} alt='greenpeace-icon' className="greenpeace-icon" />
            <img src={require('../../assets/unicef.png')} alt='unicef-icon' className="unicef-icon" />
            <img src={require('../../assets/wwf.png')} alt='wwf-icon' className="wwf-icon" />
          </div>
          <label>
            <input type="checkbox" name="no-checkbox" onClick={props.handleDonationInput} checked={!props.donation}/>
            No. Just keep my total to {`$${totalSum}`}</label>
            <button type="submit" onClick={ () => {props.redirectItinerary(props.history)}}>Complete Booking</button>
        </div>
      </aside>
    </div>
  )
}

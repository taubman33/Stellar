import React from 'react'
import '../../css/Flights.css'
import { Formik, Form, Field } from 'formik'

export default function Flights(props) {
  return (
    <div className="flights">
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
        <div className="city-of-stars-hotel-container">
          <p className="city-of-stars-hotel">City of Stars Hotel</p>
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <img src={require('../../assets/star.png')} alt='hotel-icon' className="star-icon" />
          <p className="flight-dates">Fri, Mar 20 - Sun, Mar 22</p>
        </div>
        <div className="price-container">
          <p className="starting-price">Starting Price</p>
          <p className="eco-package-savings">Eco Package Savings</p>
          <p className="total-trip-price">Total trip price</p>
        </div>
      </div>
      <p>Select your departure to Los Angeles</p>
      <p>Change departure or return flight</p>
      <p>The trip prices shown are per person and include Flight +plus Hotel, taxes & fees. Flights include e-tickets, but do not include baggage fees or other fees charged directly by the airline.</p>
      <div className="sort-filter-container">
        <p>Sort & Filter</p>
        <p>Clear</p>
        <p>Sort By</p>
        <Formik>
          <Form>
            <Field as="select" name="filter">
              <option value="lowest">Price (Lowest)</option>
            </Field>
            <p>Stops</p>
            <Field type="checkbox" name="nonStop" />
            <p>Non-Stop(52)</p>
            <Field type="checkbox" name="oneStop" />
            <p>1 Stop (28)</p>
            <p>Airlines included</p>
            <Field type="checkbox" name="jetblue" />
            <p>JetBlue Airways (12)</p>
            <Field type="checkbox" name="united" />
            <p>United (15)</p>
          </Form>
        </Formik>
      </div>
      <div className="individual-flight">
        <p>6:29pm - 9:34pm</p>
        <p>Excellent Flight (8.7/10)</p>
        <p>6h 5m (Nonstop)</p>
        <p>JFK - LAX</p>
        <p>+ $0.00</p>
        <p>Roundtrip</p>
        <p>Free cancel within 24 hrs</p>
        <img src={require('../../assets/noun-leaf.svg')} alt='leaf-icon' className="leaf-icon" />
        <p>Eco Flight</p>
        <button onSubmit={props.handleDeparting}>Select</button>
        <p>Details & baggage fees</p>
        <p>Rules and restrictions apply</p>

      </div>
    </div>
  )
}

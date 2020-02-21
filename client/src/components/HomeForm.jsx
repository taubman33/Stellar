import React from 'react'
import { Formik, Field, Form } from 'formik'
import '../css/Home.css'

function HomeForm(props) {
  return (
    <div className='home-form'>
      <Formik
        enableReinitialize
        initialValues={{ adults: 1, children: 0, flyingFrom: 'JFK', flyingTo: 'LAX', directFlights: false, ecoFriendly: false, departureDate: props.date.departure, returnDate: props.date.return }}
        onSubmit={(vals) => {
          props.handleHomeSubmit(vals, props.history)
        }}
      >
        <Form>
          <div className='home-flying'>
            <label className='home-label-above'>
              <p>Flying from</p>
              <Field as="select" name="flyingFrom">
                <option value="JFK">New York, NY (JFK)</option>
                <option value="LGA">Queens, New York (LGA)</option>
                <option value="LAX">Los Angeles (LAX)</option>
                <option value="SFO">San Francisco, CA (SFO)</option>
                <option value="DFW">Dallas/Fort Worth, TX (DFW)</option>
                <option value="ORD">Chicago, IL (ORD)</option>
              </Field>
            </label>
            <label className='home-label-above'>
              <p>Flying to</p>
              <Field as="select" name="flyingTo">
                <option value="JFK">New York, NY (JFK)</option>
                <option value="LGA">Queens, New York (LGA)</option>
                <option value="LAX">Los Angeles (LAX)</option>
                <option value="SFO">San Francisco, CA (SFO)</option>
                <option value="DFW">Dallas/Fort Worth, TX (DFW)</option>
                <option value="ORD">Chicago, IL (ORD)</option>
              </Field>
            </label>
          </div>
          <div className='home-calendar-numpassengers'>
            <label className='home-label-above' id='departure-date'>
              <p>Departing</p>
              <img src={require('../assets/calendar.svg')} alt='calendar-icon' className='calendar-icon' />
              <input type="date" value={props.date.departure} onChange={props.handleDateChange} name="departure" />
            </label>
            <label className='home-label-above' id='arrival-date'>
              <p>Returning</p>
              <img src={require('../assets/calendar.svg')} alt='calendar-icon' className='calendar-icon' />
              <input type="date" value={props.date.return} onChange={props.handleDateChange} name="return" />
            </label>
            <label className='home-label-above home-dropdowns'>
              <p>Rooms</p>
              <Field as="select" name="rooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
            </label>
            <label className='home-label-above home-dropdowns'>
              <p>Adults</p>
              <Field as="select" name="adults">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
            </label>
            <label className='home-label-above home-dropdowns'>
              <p>Kids</p>
              <Field as="select" name="children">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
            </label>
          </div>
          <div className='home-checkbox-row'>
            <Field type="checkbox" name="directFlights" />
            <p>Direct flights only</p>
            <Field type="checkbox" name="ecoFriendly" />
            <p><span className='font-bold'>Eco-Friendly Option</span> (Save $ by selecting this option)
                <img alt='question-icon'
                src={require('../assets/question-circle.png')}
                className='home-question-icon'
                onClick={props.handleEcoClick}
              />
            </p>
          </div>
          <label className='home-preferred-class'>
            <p>Preferred Class</p>
            <Field as="select" name="preferredClass">
              <option value="First class">First class</option>
              <option value="Business">Business</option>
              <option value="Economy/Coach">Economy/Coach</option>
              <option value="Premium economy">Premium economy</option>
            </Field>
          </label>
          <button type='submit' className='home-submit'>Search</button>
        </Form>
      </Formik>
    </div>
  )
}

export default HomeForm

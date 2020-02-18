import React from 'react'
import { Formik, Field, Form } from 'formik'
import '../css/Home.css'

function HomeForm(props) {
  return (
    <div className='home-form'>
      <Formik
        initialValues={{ adults: 1, children: 0, directFlights: false }}
        onSubmit={props.handleHomeSubmit}
      >
        <Form>
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
            <label className='home-label-above'>
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
            <label className='home-label-above'>
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
          <label>
            <Field type="checkbox" name="directFlights" />
            <p>Direct flights only</p>
          </label>
          <label>
            <Field type="checkbox" name="ecoFriendly" />
            <p>Eco-Friendly Option (Save $ by selecting this option)</p>
          </label>
          <label>
            <p>Preferred Class</p>
            <Field as="select" name="preferredClass">
              <option value="First class">First class</option>
              <option value="Business">Business</option>
              <option value="Economy/Coach">Economy/Coach</option>
              <option value="Premium economy">Premium economy</option>
            </Field>
          </label>
          <button>Search</button>
        </Form>
      </Formik>
    </div>
  )
}

export default HomeForm

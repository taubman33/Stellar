import React from 'react'
import { Formik, Field, Form } from 'formik'
import DatePicker from 'react-date-picker'

function HomeForm(props) {
  return (
    <div>
      <Formik
        initialValues={{ adults: 1, children: 0, directFlights: false }}
        onSubmit={props.handleHomeSubmit}
      >
        <Form>
          <label>
            Departing
           <input type="date" value={props.date.departure} onChange={props.handleDateChange} name="departure" />
          </label>
          <label>
            Arrival
            <input type="date" value={props.date.return} onChange={props.handleDateChange} name="return" />
          </label>
          <label>
            <Field as="select" name="adults">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Field>
            Adults (18+)
          </label>
          <label>
            <Field as="select" name="children">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Field>
            Children (0-17)
          </label>
          <label>
            <Field type="checkbox" name="directFlights" />
            Direct flights only
          </label>
          <label>
            <Field type="checkbox" name="ecoFriendly" />
            Eco-Friendly Option (Save $ by selecting this option)
          </label>
          <label>
          Preferred Class
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
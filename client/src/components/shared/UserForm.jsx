import React from 'react'
import { Link } from 'react-router-dom'




const UserForm = ({ user, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <br/>
    <h2>Create / edit User</h2>
    <label>Name</label>
    <input
      placeholder="new user"
      value={user.name}
      name="name"
      onChange={handleChange}
    />
     <label>Password</label>
    <input
      placeholder="Password"
      value={user.hashed_password}
      name="hashed_password"
      onChange={handleChange}
    />

    <br/>

   <label>Number of Adult Passengers</label>
    <input
      placeholder="number of adults"
      value={user.number_adults}
      name="number_adults"
      onChange={handleChange}
    />

    <label>Number of Children Passengers</label>
    <input
      placeholder="number of children"
      value={user.number_children}
      name="number_children"
      onChange={handleChange}
    />
    <br/>

    <label>Arrival Flight ID</label>
    <input
      placeholder="flight ID"
      value={user.ArrivingFlightId}
      name="ArrivingFlightId"
      onChange={handleChange}
    />

    <label>Departure Flight ID</label>
    <input
      placeholder="flight ID"
      value={user.DepartingFlightId}
      name="DepartingFlightId"
      onChange={handleChange}
    />

   <br></br>

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>


  </form>


)

export default UserForm

import React from 'react'
import { Link } from 'react-router-dom'




const UserForm = ({ user, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <br/>    
    <h2> Create a New User</h2>
    <label>Name</label>
    <input
      placeholder="new user"
      value={user}
      name="name"
      onChange={handleChange}
    />
     <label>Password</label>
    <input
      placeholder="Password"
      value={user}
      name="hashed_password"
      onChange={handleChange}
    />

    <br/>

   <label>Number of Adult Passengers</label>
    <input
      placeholder="number of adults"
      value={user}
      name="number_adults"
      onChange={handleChange}
    />

    <label>Number of Children Passengers</label>
    <input
      placeholder="number of children"
      value={user}
      name="number_children"
      onChange={handleChange}
    />
    <br/>

    <label>Arrival Flight ID</label>
    <input
      placeholder="flight ID"
      value={user}
      name="ArrivingFlightId"
      onChange={handleChange}
    />

    <label>Departure Flight ID</label>
    <input
      placeholder="flight ID"
      value={user}
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
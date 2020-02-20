import React from 'react'
import { Link } from 'react-router-dom'




const UserForm = ({ user, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="new user"
      value={user}
      name="title"
      onChange={handleChange}
    />




    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default UserForm
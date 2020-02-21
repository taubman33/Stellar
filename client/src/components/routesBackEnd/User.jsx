//the component for the User

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UserEdit from './UserEdit'




class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      deleted: false
    }
  }


  //async CDM function
  async componentDidMount() {
    try {
      const response = await axios(
        `http://localhost:3000/api/users/${this.props.match.params.id}`
      )

      this.setState({ user: response.data.user })
    } catch (err) {
      console.error(err)
    }
  }

  //DELETE function

  destroy = () => {
    axios({
      url: `http://localhost:3000/api/users/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  //our render screen for when something is being deleted or loading
  render() {
    const { user, deleted } = this.state


    if (!user) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return (
        <Redirect
          to={{ pathname: '/users', state: { msg: 'User succesfully deleted!' } }}
        />
      )
    }

    return (
      <div>
        <h2> {user.name}</h2>
        <h3>Hashed Password : {user.hashed_password}</h3>
        <h3>Departing Flight ID# : {user.departingFlightId}</h3>
        <h3>Arriving Flight ID#: {user.arrivingFlightId}</h3>

        <button onClick={this.destroy}>Delete User</button>
        <UserEdit match={this.props.match}/>
        <Link to={`/users`}>
          Back to all Users
        </Link>
      </div>
    )
  }
}

export default User

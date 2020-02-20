//the component for the User

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'




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
      console.log(response)
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
    console.log(this.props)
    console.log(user)

    if (!user) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return (
        <Redirect
          to={{ pathname: '/', state: { msg: 'User succesfully deleted!' } }}
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
        <button
          onClick={() =>
            this.props.history.push(
              `/users/${this.props.match.params.id}/users/${user.id}/edit`
            )
          }
        >
          Edit
        </button>
        <Link to={`/users`}>
          Back to all Users
        </Link>
      </div>
    )
  }
}

export default User
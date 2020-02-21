import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from '../shared/UserForm'

class UserCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: '',
    hashed_password: '',
    number_adults: 1,
    number_children: null,
    departingFlightId: null,
    arrivingFlightId: null
      },
      updated: false,

      createdUser: null
    }

  }

 //handlechange for create user bar
  handleChange = event => {
    this.setState({ user: {...this.state.user, [event.target.name]: event.target.value }})
  }

  //prevent default for user create submissions
  handleSubmit = event => {
    event.preventDefault()

    //axios call - POST method - create user
    axios({
      url: `https://stellar-travel.herokuapp.com/api/users/`,
      method: 'POST',
      data: this.state.user
    })
      .then(res => this.setState({ createdUser: res.data.user }))
      .catch(console.error)
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { createdUser, user } = this.state
    if (createdUser) {
      return <Redirect to={`/users`} />
    }

    return (

        <UserForm
          user={{ user }}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
    )

  }
}

export default UserCreate

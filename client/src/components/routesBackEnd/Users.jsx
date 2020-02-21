import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'


//setting up react -> using class and state because of how much going on here
class Users extends Component {
  constructor(props) {
    super(props)

    //state
    this.state = {
      users: []
    }
  }


  //response slug needs to be fixed when deployed***
  async componentDidMount() {
    try {
      const response = await axios('https://stellar-travel.herokuapp.com/api/users')
      this.setState({ users: response.data.users })
    } catch (err) {
      console.error(err)
    }
  }

  //rendering user info
  render() {

    const { users } = this.state

    if (!users) {
      return <p>Loading...</p>
    }
    const usersList = this.state.users.map(user => (
      <div key={user.id}>
        <h2>
          {user.name}
          <Link to={`/users/${user.id}`}>View User</Link>
        </h2>
      </div>
    ))

    return (
        <Layout>
        <h4>Passenger Manifest</h4>
        <ul>{usersList}</ul>
        </Layout>
    )
  }
}

export default Users

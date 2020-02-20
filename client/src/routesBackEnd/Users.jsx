import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'


//setting up react style
class Users extends Component {
  constructor(props) {
    super(props)

    //state 
    this.state = {
      users: []
    }
  }
  
  
  //response slug needs to be fixed
  async componentDidMount() {
    try {
      const response = await axios(`${apiUrl}/users`)
      this.setState({ users: response.data.users })
    } catch (err) {
      console.error(err)
    }
  }

  //rendering user info
  render() {
    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h2>
          {user.name}
          <button
            onClick={() => this.props.history.push(`/users/${user.id}`)}
          >
            View Users
          </button>
          <button
            onClick={() =>
              this.props.history.push(`/users/${user.id}/create-user`)
            }
          >
            Create User
          </button>
        </h2>
      </div>
    ))

    return (
      <Layout>
        <h4>Users</h4>
        <ul>{users}</ul>
      </Layout>
    )
  }
}

export default Users
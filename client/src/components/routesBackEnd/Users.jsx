import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../shared/Layout'



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
      const response = await axios('http://localhost:3000/api/users')
      this.setState({ users: response.data.users })
    } catch (err) {
      console.error(err)
    }
  }

  //rendering user info
  render() {
    const users = this.state.users.map(user => (
      <div key={user.userId}>
        <h2>
          {user.name}
          <button
            onClick={() => this.props.history.push(`/users/${user.userId}`)}
          >
            View Users
          </button>
          <button
            onClick={() =>
              this.props.history.push(`/users/${user.userId}/create-user`)
            }
          >
            Create User
          </button>
        </h2>
      </div>
    ))

    return (
        <Layout>
        <h4>Passenger Manifest</h4>
        <ul>{users}</ul>
        </Layout>
    )
  }
}

export default Users
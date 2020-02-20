//the component for the User

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Layout from '../shared/Layout'


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
        `http://localhost:3000/api/users/${this.props.match.params.user_id}`
      )
      this.setState({ user: response.data.user })
    } catch (err) {
      console.error(err)
    }
  }

  //DELETE function

  destroy = () => {
    axios({
      url: `http://localhost:3000/api/items/${this.props.match.params.item_id}`,
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
          to={{ pathname: '/', state: { msg: 'User succesfully deleted!' } }}
        />
      )
    }


    //a lot more going on in this than my P2, still so much React to practice and master!
    return (
      <div>
        <h4>{user.title}</h4>
        <p>Link: {user.link}</p>
        <button onClick={this.destroy}>Delete User</button>
        <button
          onClick={() =>
            this.props.history.push(
              `/users/${this.props.match.params.user_id}/items/${user.id}/edit`
            )
          }
        >
          Edit
        </button>
        <Link to={`/users/${this.props.match.params.user_id}/items/`}>
          Back to all Users
        </Link>
      </div>
    )
  }
}

export default User
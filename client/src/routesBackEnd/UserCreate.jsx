import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import UserForm from '../shared/UserForm'
import Layout from '../shared/Layout'


//retyped out from the solution branch because I was having errors when I first tried it
class UserCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
    //   title: '',
    //   link: '',
      createdUser: null
    }

  }

 //handlechange for create user bar
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  //prevent default for user create submissions 
  handleSubmit = event => {
    event.preventDefault()

    //axios call - POST method - create user
    axios({
      url: `${apiUrl}/users/${this.props.match.params.user_id}`,
      method: 'POST',
      data: { title: this.state.title, link: this.state.link }
    })
      .then(res => this.setState({ createdUser: res.data.item }))
      .catch(console.error)
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { createdUser, title, link } = this.state

    if (createdUser) {
      return <Redirect to={`/users/${this.props.match.params.user_id}`} />
    }


    
    return (
      <Layout>
        <UserForm
          item={{ title, link }}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    )
  }
}

export default UserCreate
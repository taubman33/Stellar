import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from '../shared/UserForm'




class UserCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
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
      url: `http://localhost:3000/api/users/${this.props.match.params.user_id}`,
      method: 'POST',
      data: { name: this.state.name }
    })
      .then(res => this.setState({ createdUser: res.data.item }))
      .catch(console.error)
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { createdUser, name } = this.state

    if (createdUser) {
      return <Redirect to={`/users/${this.props.match.params.user_id}`} />
    }


    
    return (
    
        <UserForm
          item={{ name }}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
     
    )
  }
}

export default UserCreate
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from '../shared/UserForm'


class UserEdit extends Component {
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
            updated: false
        }
    }


        //update (PUT) user
    async componentDidMount() {
        try {
            const response = await axios(
                `https://stellar-travel.herokuapp.com/api/users/${this.props.match.params.id}`
            )
            this.setState({ user: response.data.user })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }
        const editedUser = Object.assign(this.state.user, updatedField)
        this.setState({ user: editedUser })
    }

    handleSubmit = event => {
        event.preventDefault()

        axios({
            url: `https://stellar-travel.herokuapp.com/api/users/${this.props.match.params.id}`,
            method: 'PUT',
            data: this.state.user
        })
            .then(() => this.setState({ updated: true }))
            .catch(console.error)
    }

    //rendering on screen
    render() {

        const { user, updated } = this.state
        const { handleChange, handleSubmit } = this

        if (updated) {
            return (
                <Redirect
                    to={`/users/${this.props.match.params.id}`}
                />
            )
        }
        //return
        return (
            <div>
                <h4>Edit User</h4>
                <UserForm
                    user={user}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/users`}
                />
            </div>
        )
    }
}

export default UserEdit

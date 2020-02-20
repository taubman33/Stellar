import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from '../shared/UserForm'


class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {   
                title: '',
                link: ''
            },
            updated: false
        }
    }


        //update (PUT) user
    async componentDidMount() {
        try {
            const response = await axios(
                `http://localhost:3000/api/users/${this.props.match.params.userId}`
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
            url: `http://localhost:3000/api/users/${this.props.match.params.userId}`,
            method: 'PUT',
            data: { title: this.state.user.title, link: this.state.user.link} 
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
                    to={`/users/${this.props.match.params.userId}`}
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
                    // cancelPath={`/users/${this.props.match.params.userId}`}
                />
            </div>
        )
    }
}

export default UserEdit
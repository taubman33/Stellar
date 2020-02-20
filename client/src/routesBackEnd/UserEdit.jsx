import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from '../shared/UserForm'
import Layout from '../shared/Layout'
import apiUrl from '../../apiConfig'

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
                `${apiUrl}/users/${this.props.match.params.userId}`
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
            url: `${apiUrl}/user/${this.props.match.params.userId}`,
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
                    to={`/users/${this.props.match.params.user_id}`}
                />
            )
        }
        //return 
        return (
            <Layout>
                <h4>Edit User</h4>
                <UserForm
                    user={user}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/users/${this.props.match.params.userId}`}
                />
            </Layout>
        )
    }
}

export default UserEdit
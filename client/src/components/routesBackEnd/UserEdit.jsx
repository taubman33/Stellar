import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from '../shared/UserForm'
import Layout from '../shared/UserForm'


class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {   
                
                name: '',
                hashed_password: '',
                number_adults: '',
                number_children: '',
                arrivingFlightId: '',
                departingFlightId: ''
               
            },
            updated: false
        };
    }


        //update (PUT) user
    async componentDidMount() {
        try {
            const response = await axios(
                `http://localhost:3000/api/users/${this.props.match.params.userId}`
            );
            console.log("res", response.data.user)
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
            url: `http://localhost:3000/api/users/${this.props.match.params.id}`,
            method: 'PUT',
            data: { user: this.state.user } 
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
            <Layout>
                <h4>Edit User</h4>
                <UserForm
                    user={user}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/users`}
                />
            </Layout>
        )
    }
}

export default UserEdit
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStudent } from '../reducers/student';

// Displays a form to create a new student, adding it to state after creation
class CreateStudent extends Component {
    constructor () {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            imageUrl: undefined,
            gpa: ''
        }

        // Bind handlers to the component
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // On submit, call the creation thunk and navigate the user to the all students page
    async handleSubmit (event) {
        event.preventDefault()
        await this.props.createStudent({ ...this.state })
        this.props.history.push('/students')
    }

    // On change, update this component's local state
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render () {
        // Pull out handlers and local state data
        const { handleChange, handleSubmit } = this;
        const { firstName, lastName, email, imageUrl, gpa } = this.state;

        return (
            <div>
                <h3> Create New Student </h3>
                <form onSubmit={ handleSubmit }>
                    <label> First Name </label>
                    <input name='firstName' onChange={ handleChange } value={ firstName }></input>
                    <label> Last Name </label>
                    <input name='lastName' onChange={ handleChange } value={ lastName }></input>
                    <label> Email </label>
                    <input name='email' onChange={ handleChange } value={ email }></input>
                    <label> Image URL (Optional) </label>
                    <input name='imageUrl' onChange={ handleChange } value={ imageUrl }></input>
                    <label> GPA </label>
                    <input name='gpa' onChange={ handleChange } value={ gpa }></input>
                    <button type='submit'> Create </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    createStudent: (student) => dispatch(createStudent(student))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateStudent))
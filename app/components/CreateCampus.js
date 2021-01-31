import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createCampus } from '../reducers/campus';

// Displays a form to create a new campus, adding it to state after creation
class CreateCampus extends Component {
    constructor () {
        super()

        this.state = {
            name: '',
            address: '',
            imageUrl: undefined,
            description: undefined
        }

        // Bind handlers to the component
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // On submit, call the creation thunk and navigate the user to the all campuses page
    async handleSubmit (event) {
        event.preventDefault()
        await this.props.createCampus({ ...this.state })
        this.props.history.push('/campuses')
    }

    // On change, update this component's local state
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render () {
        // Pull out handlers and local state data
        const { handleChange, handleSubmit } = this;
        const { name, address, imageUrl, description } = this.state;

        return (
            <div>
                <h3> Create New Campus </h3>
                <form onSubmit={ handleSubmit }>
                    <label> Name </label>
                    <input name='name' onChange={ handleChange } value={ name }></input>
                    <label> Address </label>
                    <input name='address' onChange={ handleChange } value={ address }></input>
                    <label> Image URL (Optional) </label>
                    <input name='imageUrl' onChange={ handleChange } value={ imageUrl }></input>
                    <label> Description (Optional) </label>
                    <input name='description' onChange={ handleChange } value={ description }></input>
                    <button type='submit'> Create </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    createCampus: (campus) => dispatch(createCampus(campus))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCampus))
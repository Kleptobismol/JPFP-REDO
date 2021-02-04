import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudent } from '../reducers/student';

// Message displayed when no Campuses are found
const noCampusMessage = `
    Unfortunately, this person isn't a student anywhere. Hopefully one day they will pursue higher education!
`

// This stateful component displays a single student
class SingleStudent extends Component {
    componentDidMount() {
        // Fetch data of selected student
        this.props.init(this.props.match.params.id)
    }

    render () {
        // Grab student data initialized on mount
        const { student } = this.props

        // Render is executed first, this block allows componentDidMount to fetch the necessary data before we render
        if (!student.firstName) {
            return null
        }

        // Initialize this boolean to be used in our HTML below
        const campusExists = student.campus != null && student.campus.id

        return (
            <div className='singleStudent'>
                <h1>{ student.firstName } { student.lastName }</h1>
                <img src={ window.location.origin + '/' + student.imageUrl }/>
                <h2> { student.email }</h2>
                <h2> { student.gpa } GPA </h2>
                <br></br><br></br>
                <h2>{ campusExists ? 'Campus' : noCampusMessage }</h2>
                { 
                    campusExists ? 
                    <Link to={'/campuses/' + student.campus.id}>{ student.campus.name }</Link>
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ student: state.students.selectedStudent })

const mapDispatchToProps = (dispatch) => ({
    init: (id) => dispatch(fetchStudent(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
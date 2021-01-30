import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../reducers/student.js';

// This component displays all students in database, including only first and last name
class AllStudents extends Component {
    // Fetch student data
    componentDidMount () {
        this.props.init();
    }

    render () {
        // Grab student data that we initialized on mount
        const { students } = this.props;

        return (
            <div>
                <ul>
                    { students.map(student => {
                        return (
                            <li key={ student.id }>
                                {/* Contains Link to individual student */}
                                <Link to={'/students/' + student.id}>{ student.firstName } { student.lastName }</Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ students: state.students.students });

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudents, deleteStudent } from '../reducers/student.js';
import CreateStudent from './CreateStudent';

// This component displays all students in database, including only first and last name
class AllStudents extends Component {
    // Fetch student data
    componentDidMount () {
        this.props.init();

        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete (event, id) {
        event.preventDefault()
        await this.props.delete(id)
        this.props.init();
    }

    render () {
        // Grab student data that we initialized on mount
        const { students } = this.props;
        const { handleDelete } = this;

        return (
            <div>
                <CreateStudent/>
                <ul>
                    { students.map(student => {
                        return (
                            <li key={ student.id }>
                                <button type='button' onClick={ event => handleDelete(event, student.id) }>X</button>
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
        init: () => dispatch(fetchStudents()),
        delete: (id) => dispatch(deleteStudent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
import React from 'react';
import { connect } from 'react-redux';

let Students = ({ students }) => {
    return (
        <div>
            <ul>
                { students.map(student => {
                    return (
                        <li>
                            <h3>{ student.name }</h3>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => ({
    students: state.reducer.students
    })

Students = connect(
mapStateToProps,
null
)(Students)

export default Students;
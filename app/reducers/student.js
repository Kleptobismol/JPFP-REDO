import axios from 'axios';

// Constants
const GET_STUDENTS = 'GET_STUDENTS';
const state = {
    students: []
}

// Action Creators

//Initializes students or updates after student creation
export const setStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
};

// Thunk Creators

// Fetches student data 
export const fetchStudents = () => {
    return async(dispatch) => {
        const students = (await axios.get('/api/students')).data
        dispatch(setStudents(students))
    }
};

// Reducer
export default (state=state, action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students
        default:
            return state
    }
}


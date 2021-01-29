import Axios from 'axios';

// Constants
const GET_STUDENTS = 'GET_STUDENTS';

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
        const students = (await Axios.get('/api/students')).data
        dispatch(setStudents(students))
    }
};

// Reducer
export default (state=[], action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students
        default:
            return state
    }
}


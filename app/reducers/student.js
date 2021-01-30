import axios from 'axios';

// Initial State
const initialState = {
    students: [],
    selectedStudent: {}
}

// Constants
const SET_STUDENTS = 'SET_STUDENTS';
const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT';

// Action Creators

//Initializes students or updates after student creation
export const setStudents = (students) => {
    return {
        type: SET_STUDENTS,
        students
    }
};

// Adds selected student to state or updates selected student
export const setStudent = (selectedStudent) => {
    return {
        type: SET_SELECTED_STUDENT,
        selectedStudent
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

// Fetches single student data 
export const fetchStudent = (id) => {
    return async(dispatch) => {
        const student = (await axios.get(`/api/students/${ id }`)).data
        dispatch(setStudent(student))
    }
};

// Reducer
export default (state=initialState, action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return { ...state, students: action.students }
        case SET_SELECTED_STUDENT:
            return { ...state, selectedStudent: action.selectedStudent }
        default:
            return state
    }
}


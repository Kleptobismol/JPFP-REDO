import axios from 'axios';

// Initial State
const initialState = {
    students: [],
    selectedStudent: {}
}

// Constants
const SET_STUDENTS = 'SET_STUDENTS';
const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT';
const UPDATE = 'UPDATE'

// Action Creators

// Initializes students
export const setStudents = (students) => {
    return {
        type: SET_STUDENTS,
        students
    }
};

// Updates selected student in state
export const setStudent = (selectedStudent) => {
    return {
        type: SET_SELECTED_STUDENT,
        selectedStudent
    }
};

// Updates state with new student
export const updateStudents = (student) => {
    return {
        type: UPDATE,
        student
    }
}

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

// Creates new student
export const createStudent = (newStudent) => {
    return async(dispatch) => {
        const student = (await axios.post(`/api/students`, newStudent)).data
        dispatch(updateStudents(student))
    }
}

// Reducer
export default (state=initialState, action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return { ...state, students: action.students }
        case SET_SELECTED_STUDENT:
            return { ...state, selectedStudent: action.selectedStudent }
        case UPDATE:
            return { ...state, students: [ ...state.students, action.student ]}
        default:
            return state
    }
}


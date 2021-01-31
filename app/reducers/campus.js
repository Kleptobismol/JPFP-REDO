import axios from 'axios';

// Initial State
const initialState = {
    campuses: [],
    selectedCampus: {}
}

// Constants
const SET_CAMPUSES = 'SET_CAMPUSES';
const SET_SELECTED_CAMPUS = 'SET_SELECTED_CAMPUS';
const UPDATE = 'UPDATE'

// Action Creators

// Initializes campuses
export const setCampuses = (campuses) => {
    return {
        type: SET_CAMPUSES,
        campuses
    }
};

// Updates selected campus in state
export const setCampus = (selectedCampus) => {
    return {
        type: SET_SELECTED_CAMPUS,
        selectedCampus
    }
};

// Updates state with new campus
export const updateCampuses = (campus) => {
    return {
        type: UPDATE,
        campus
    }
}

//Thunk Creators

// Fetches campus data 
export const fetchCampuses = () => {
    return async(dispatch) => {
        const campuses = (await axios.get('/api/campuses')).data
        dispatch(setCampuses(campuses))
    }
};

// Fetches single campus data 
export const fetchCampus = (id) => {
    return async(dispatch) => {
        const campus = (await axios.get(`/api/campuses/${ id }`)).data
        dispatch(setCampus(campus))
    }
};

// Creates new campus
export const createCampus = (newCampus) => {
    return async(dispatch) => {
        const campus = (await axios.post(`/api/campuses`, newCampus)).data
        dispatch(updateCampuses(campus))
    }
}

// Deletes campus
export const deleteCampus = (id) => {
    return async () => {
        await axios.delete(`/api/campuses/${ id }`)
        fetchCampuses();
    }
}

// Reducer
export default function campusReducer (state=initialState, action) {
    switch (action.type) {
        case SET_CAMPUSES:
            return { ...state, campuses: action.campuses }
        case SET_SELECTED_CAMPUS:
            return { ...state, selectedCampus: action.selectedCampus }
        case UPDATE:
            return { ...state, campuses: [ ...state.campuses, action.campus ]}
        default:
            return state
    }
}


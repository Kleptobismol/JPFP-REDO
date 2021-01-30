import axios from 'axios';

// Initial State
const initialState = {
    campuses: [],
    selectedCampus: {}
}

// Constants
const SET_CAMPUSES = 'SET_CAMPUSES';
const SET_SELECTED_CAMPUS = 'SET_SELECTED_CAMPUS';

// Action Creators

// Initializes campuses or updates after campus creation
export const setCampuses = (campuses) => {
    return {
        type: SET_CAMPUSES,
        campuses
    }
};

// Adds selected campus to state or updates selected campus
export const setCampus = (selectedCampus) => {
    return {
        type: SET_SELECTED_CAMPUS,
        selectedCampus
    }
};

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

// Reducer
export default function campusReducer (state=initialState, action) {
    switch (action.type) {
        case SET_CAMPUSES:
            return { ...state, campuses: action.campuses }
        case SET_SELECTED_CAMPUS:
            return { ...state, selectedCampus: action.selectedCampus }
        default:
            return state
    }
}


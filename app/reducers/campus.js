import axios from 'axios';

// Constants
const GET_CAMPUSES = 'GET_CAMPUSES';

// Action Creators

//Initializes campuses or updates after campus creation
export const setCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
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

// Reducer
export default (state=[], action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses
        default:
            return state
    }
}


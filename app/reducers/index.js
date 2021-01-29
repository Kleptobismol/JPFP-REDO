import studentReducer from './student'
import campusReducer from './campus'
import {combineReducers} from 'redux'

// Combines our reducers into one parent reducer
const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
})

export default rootReducer

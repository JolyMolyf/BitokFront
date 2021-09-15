import { combineReducers } from "redux";
import carReducer from './carReducer'
import workersReducer from './workersReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
    carReducer: carReducer,
    workersReducer, 
    appReducer

})

export default rootReducer
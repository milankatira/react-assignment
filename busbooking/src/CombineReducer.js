import { combineReducers } from 'redux'
import Reducer from './redux/Reducer'
import userReducer from './Userredux/UserReducer'
const combine = combineReducers({
    bus:Reducer,
    user:userReducer,
})

export default combine;
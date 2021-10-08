import { combineReducers } from 'redux'
import Reducer from './redux/ticket/Reducer'
import userReducer from './redux/User/UserReducer'
const combine = combineReducers({
    bus:Reducer,
    user:userReducer,
})

export default combine;
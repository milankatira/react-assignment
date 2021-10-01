import { combineReducers } from 'redux'
import Reducer from './redux/Reducer'
import userReducer from './user/userReducer'
const combine = combineReducers({
    bus:Reducer,
    user: userReducer
})

export default combine;
import { combineReducers } from 'redux'
import Reducer from './redux/ticket/Reducer'
import userReducer from './redux/User/UserReducer'
import loginReducer from './redux/login/UserReducer';
const combine = combineReducers({
    bus:Reducer,
    user:userReducer,
    login:loginReducer
})

export default combine;
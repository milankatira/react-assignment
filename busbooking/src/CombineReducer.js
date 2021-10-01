import { combineReducers } from 'redux'
import Reducer from './redux/Reducer'
const combine = combineReducers({
    bus:Reducer
})

export default combine;
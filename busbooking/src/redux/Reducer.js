import { BUY_SEAT } from './ActionType'

// const initialState = {
//   numOfseats: [{ id: 1, status: false }]
// }
const numOfseats = {
  status: false,
  id: [],
}


const Reducer = (state = numOfseats, action) => {
  switch (action.type) {
    case BUY_SEAT:
      // let arr = state.numOfseats.map((item, i,) => {
      //   item.id == action.payload.id
      //   item.status == action.payload.status
      // }
      // )

      return {
      ...state,
        numOfseats: action.payload 
      }
    default: return state
  }
}

export default Reducer
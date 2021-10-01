import { BUY_SEAT } from './ActionType'

const initialState = {
  numOfseats: "book your seat",
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SEAT: return {
      numOfseats:action.payload
    }
    default: return state
  }
}

export default Reducer
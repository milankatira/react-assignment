import { BUY_SEAT } from './ActionType'

export const initialState =
  [
    {
      id: 1,
      status: false
    },
    
    {
      id: 2,
      status: false
    },
    
    {
      id: 3,
      status: false
    },
    {
      id: 4,
      status: false
    },
    
    {
      id: 5,
      status: false
    },
    
    {
      id: 6,
      status: false
    },
    {
      id: 7,
      status: false
    },
    
    {
      id: 8,
      status: false
    },

  ]



const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SEAT: return [
    ...action.payload
    ]

    default: return state
  }
}

export default Reducer
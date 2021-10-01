import { BUY_SEAT } from './ActionType'
export const BUYSEAT = (id,status) => {
  return {
    type: BUY_SEAT,
    payload: id,status
  }
}

// export default BUYSEAT;



import {BUY_SEAT} from './ActionType'

export const BUYSEAT = (value  ='seat book succesfully',style={ backgroundColor: '#ff4242'} ) => {
    return {
      type: BUY_SEAT,
      payload: value,style,
    }
  }
  
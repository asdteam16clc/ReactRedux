import { INCREMENT, DECREMENT, SHOWLIST } from '../constants'

export const increment = (isServer) => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const decrement = (isServer) => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      from: isServer ? 'server' : 'client'
    })
  }


}
export const showlist = (data) => {
  return {
    type: SHOWLIST,
    DATA: data
  }
}
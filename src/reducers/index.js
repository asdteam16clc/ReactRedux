import { INCREMENT, DECREMENT, SHOWLIST } from '../constants'

const initialState = {
  value: 0,
  action: null,
  from: null,
  option: {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  }
}

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        action: 'increment',
        from: action.from
      }

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        action: 'decrement',
        from: action.from
      }

    case SHOWLIST: {
      return {
        ...state,
        option: action.DATA
      }
    }

    default:
      return state
  }
}

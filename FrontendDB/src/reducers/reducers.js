import { GET_ALL_CARDS, GET_MY_CARD } from '../actions/actions.js'

const reducers = (state = {
  allCards: [], myCard: {}
}, action) => {

  switch (action.type) {
    //~~~~ Cases ~~~~//
    case GET_ALL_CARDS:
      return { ...state, allCards: action.payload }
    case GET_MY_CARD:
      console.log("HI REDUCERS BEEN HIT SON", action.payload)
      return { ...state, myCard: action.payload }
    default:
      return state
  }
}

export default reducers;
import { GET_ALL_CARDS, GET_MY_CARD, ADD_CARD_INFO } from '../actions/actions.js'

const reducers = (state = {
  allCards: [], myCard: {}, addInfo:{}
}, action) => {

  switch (action.type) {
    //~~~~ Cases ~~~~//
    case GET_ALL_CARDS:
      return { ...state, allCards: action.payload }
    case GET_MY_CARD:
      return { ...state, myCard: action.payload }
    case ADD_CARD_INFO: 
      return { ...state, addInfo: action.payload}
    default:
      return state
  }
}

export default reducers;
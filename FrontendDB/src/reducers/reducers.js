import { GET_ALL_CARDS, GET_MY_CARD, NEW_CARD_DATA, ADD_CARD_INFO } from '../actions/actions.js'

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
      return { ...state, addInfo: action.payload} //missing something here?
    case NEW_CARD_DATA:
      state.addInfo.user_id = action.id
      state.addInfo.data = action.payload
      return state.addInfo
    // case NEW_CARD_CSS:
    //   state.addInfo[css] = action.payload
      // return state.addInfo
    default:
      return state
  }
}

export default reducers;
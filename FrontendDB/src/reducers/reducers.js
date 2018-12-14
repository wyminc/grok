import { AUTH_INFO, GET_ALL_CARDS, GET_MY_CARD } from '../actions/actions.js'

const reducers = (state = {
  allCardsData: [], allCardsCSS:[], myCardData: {}, myCardCSS: {}, authInfo: {}
}, action) => {

  switch (action.type) {
    //~~~~ Cases ~~~~//
    case AUTH_INFO:
      const newAuthInfo = {
        isAuthenticated: true,
        user: action.payload
      }
      return {...state, authInfo: newAuthInfo}
    case GET_ALL_CARDS:
      action.payload.forEach(card => {
        state.allCardsData.push(card.data)
        state.allCardsCSS.push(card.css)
      });
      return { ...state, allCards: action.payload }
    case GET_MY_CARD:
      return { ...state, myCardData: action.payload.data, myCardCSS: action.payload.css }
    default:
      return state
  }
}

export default reducers;
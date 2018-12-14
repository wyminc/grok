import { AUTH_INFO, GET_ALL_CARDS, GET_MY_CARD, NEW_CARD_DATA, ADD_CARD_INFO } from '../actions/actions.js'

const reducers = (state = {
  allCardsData: [], allCardsCSS:[], myCardData: {}, myCardCSS: {}, authInfo: {}, addInfo: {}
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
    case ADD_CARD_INFO: 
      return { ...state, addInfo: action.payload} //missing something here?
    case NEW_CARD_DATA:
      const newData = {
        user_id: action.id,
        data: action.payload
      }
      console.log("WHAT IM ADDING:", newData)
      return {...state, addInfo: newData }
    // case NEW_CARD_CSS:
    //   const nextInfo = {...state.addInfo, css: action.payload}

      // return {...state, addInfo: nextInfo}
    default:
      return state
  }
}

export default reducers;
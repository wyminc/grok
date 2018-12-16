import { AUTH_INFO, GET_ALL_CARDS, GET_MY_CARD, NEW_CARD_DATA, NEW_CARD_CSS, ADD_NEW_CARD } from '../actions/actions.js'

const reducers = (state = {
  allCardsData: [], allCardsCSS:[], myCardData: {}, myCardCSS: {}, authInfo: {}, addInfo: {}}, 
  action) => {

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
    case ADD_NEW_CARD: 
      console.log("ADD CARD", action.payload)
      return { ...state, addInfo: action.payload} 
    case NEW_CARD_DATA:
      const newData = {
        user_id: action.id,
        data: action.payload,
        css: {}
      }
      console.log("WHAT IM ADDING:", newData)
      return {...state, addInfo: newData }
    case NEW_CARD_CSS:
      const nextInfo = {...state.addInfo, css: action.payload}
      console.log("NEXT INFO: ", nextInfo);
      return {...state, addInfo: nextInfo}
    default:
      return {...state}
  }
}

export default reducers;
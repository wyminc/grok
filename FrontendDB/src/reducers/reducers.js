import { GET_ALL_CARDS, GET_MY_CARD } from '../actions/actions.js'

const reducers = (state = {
  allCardsData: [], allCardsCSS:[], myCardData: {}, myCardCSS: {}
}, action) => {

  switch (action.type) {
    //~~~~ Cases ~~~~//
    case GET_ALL_CARDS:
      action.payload.forEach(card => {
        state.allCardsData.push(card.data)
        state.allCardsCSS.push(card.css)
      });
      console.log("ALLDATA", state.allCardsData)
      console.log("ALLCSS", state.allCardsCSS)
      return { ...state, allCards: action.payload }
    case GET_MY_CARD:
      return { ...state, myCardData: action.payload.data, myCardCSS: action.payload.css }
    default:
      return state
  }
}

export default reducers;
import {
  AUTH_INFO,
  GET_ALL_CARDS,
  GET_MY_CARD
} from '../actions/actions.js'

const reducers = (state = {
  allCards: [],
  allCardsData: [],
  allCardsCSS: [],
  allCardsId: [],
  myCard: {
    user_id: "",
    data: {},
    css: {},
    users: []
  },
  authInfo: {}
}, action) => {

  switch (action.type) {
    //~~~~ Cases ~~~~//
    case AUTH_INFO:
      const newAuthInfo = {
        isAuthenticated: true,
        user: action.payload
      }
      return { ...state,
        authInfo: newAuthInfo
      }
    case GET_ALL_CARDS:
      return { ...state,
        allCards: action.payload
      }
    case GET_MY_CARD:
      const newData = {
        user_id: action.payload.user_id,
        data: action.payload.data,
        css: action.payload.css
      }
      return { ...state,
        myCard: newData
      }
    default:
      return state
  }
}

export default reducers;
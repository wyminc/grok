import {
  AUTH_INFO,
  GET_ALL_CARDS,
  GET_MY_CARD,
  NEW_CARD_DATA,
  NEW_CARD_CSS,
  ADD_NEW_CARD
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
    users: [],
    addInfo: {}
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
      const myData = {
        user_id: action.payload.user_id,
        data: action.payload.data,
        css: action.payload.css
      }
      return { ...state,
        myCard: myData
      }
    case NEW_CARD_DATA:
      const newData = {
        user_id: action.id,
        data: action.payload,
        css: {}
      }
      console.log("WHAT IM ADDING:", newData)
      return { ...state,
        addInfo: newData
      }
    case NEW_CARD_CSS:
      const nextInfo = { ...state.addInfo,
        css: action.payload
      }
      console.log("NEXT INFO: ", nextInfo);
      return { ...state,
        addInfo: nextInfo
      }
    case ADD_NEW_CARD:
      console.log("ADD CARD", action.payload)
      return { ...state,
        addInfo: action.payload
      }
    default:
      return { ...state
      }
  }
}

export default reducers;
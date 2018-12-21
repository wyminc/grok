import {
  AUTH_INFO,
  GET_ALL_CARDS,
  GET_MY_CARD,
  NEW_CARD_DATA,
  NEW_CARD_CSS,
  ADD_NEW_CARD,
  EDIT_CARD_DATA,
  EDIT_CARD_CSS,
  DELETE_CARD,
  MY_DELETED_CARD,
  NO_CARD
} from '../actions/actions.js'

const reducers = (state = {
  allCards: [],
  myCard: {
    user_id: "",
    data: {},
    css: {
      back: {},
      company: {},
      front: {},
      info: {}
    },
    users: [],
    addInfo: {},
    editInfo: {}
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
      return {
        ...state,
        authInfo: newAuthInfo
      }
    case NO_CARD:
      let noCard = { ...state.myCard };
      noCard.no_card = true;
      return {
        ...state,
        myCard: noCard
      }
    case MY_DELETED_CARD:
      let deletedCard = { ...action.payload }
      delete deletedCard.data;
      deletedCard.css = {
        back: {},
        company: {},
        front: {},
        info: {}
      }
      return {
        ...state,
        myCard: deletedCard
      }
    case GET_ALL_CARDS:
      if (!action.payload) {
        return { ...state }
      } else {
        const newPayload = action.payload.map(card => {
          let parsedAllCss = {};
          for (var key in card.css) {
            parsedAllCss[key] = JSON.parse(card.css[key])
          }
          return {
            ...card,
            css: parsedAllCss
          }
        })
        return {
          ...state,
          allCards: newPayload
        }
      }
    case GET_MY_CARD:
      let parsedMyCss = {};
      for (var key in action.payload.css) {
        parsedMyCss[key] = JSON.parse(action.payload.css[key])
      }
      const myData = { ...action.payload, css: parsedMyCss }
      return {
        ...state,
        myCard: myData
      }
    case NEW_CARD_DATA:
      const newData = {
        user_id: action.id,
        data: action.payload,
        css: {}
      }
      console.log("WHAT IM ADDING:", newData)
      return {
        ...state,
        addInfo: newData
      }
    case NEW_CARD_CSS:
      const nextInfo = {
        ...state.addInfo,
        css: action.payload
      }
      console.log("NEXT INFO: ", nextInfo);
      return {
        ...state,
        addInfo: nextInfo
      }
    case ADD_NEW_CARD:
      console.log("ADD CARD", action.payload)
      return {
        ...state,
        addInfo: action.payload
      }
    case EDIT_CARD_DATA:
      console.log("EDIT CARD DATA: ", action.payload)
      const editData = {
        user_id: action.id,
        data: action.payload,
        css: {}
      }
      console.log("WHAT I'M EDITIING: ", editData)
      return {
        ...state,
        editInfo: editData
      }
    case EDIT_CARD_CSS:
      console.log("EDIT CARD CSS: ", action.payload)
      const editCss = {
        ...state.editInfo,
        css: action.payload
      }
      console.log("editCss", editCss)
      return {
        ...state,
        editInfo: editCss
      }
    case DELETE_CARD:
      return {
        ...state, myCard: {
          user_id: "",
          data: {},
          css: {
            back: {},
            company: {},
            front: {},
            info: {}
          },
          users: [],
          addInfo: {},
          editInfo: {},
        }
      }
    default:
      return { ...state }
  }
}

export default reducers;
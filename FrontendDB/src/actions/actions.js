import axios from "axios";

export const AUTH_INFO = 'AUTH_INFO';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_MY_CARD = "GET_MY_CARD";
export const NEW_CARD_DATA = "NEW_CARD_DATA";
export const NEW_CARD_CSS = "NEW_CARD_CSS";
export const ADD_NEW_CARD = "ADD_NEW_CARD"

//Auth Actions 
export const authenticated = (data) => {
  return dispatch => {
    dispatch({
      type: AUTH_INFO,
      payload: data
    })
  }
}

//~~~~~~~~~~ CARD ACTIONS ~~~~~~~~~~//

export const getAllCards = (id) => {
  return dispatch => {
    axios
      .get(`/all/${id}`)
      .then(response => {
        dispatch({
          type: GET_ALL_CARDS,
          payload: response.data
        })
      })
      .catch(err => {
        console.log("Error at getting all cards", err)
      })
  }
}

export const getMyCard = (id) => {
  return dispatch => {
    axios
      .get(`/specific/${id}`)
      .then(response => {
        dispatch({
          type: GET_MY_CARD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log("Error at getting my card", err)
      })
  }
}

export const newCardData = (id, info) => {
  return dispatch => {
    dispatch({
      type: NEW_CARD_DATA,
      id: id,
      payload: info
    })
  }
}


export const newCardCss = (style) => {
  return dispatch => {
    dispatch({
      type: NEW_CARD_CSS,
      payload: style
    })
  }
}

export const newCard = (body) => {
  // body.users = [];
  // body.is_deleted = false;
  console.log("submit body", body)
  return dispatch => {
    axios
      .post('/add', body)
      .then(response => {
        dispatch({
          type: ADD_NEW_CARD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log("Error at getting all cards", err)
      })
  }
}
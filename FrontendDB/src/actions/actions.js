import axios from "axios";

export const AUTH_INFO = 'AUTH_INFO';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_MY_CARD = "GET_MY_CARD";

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
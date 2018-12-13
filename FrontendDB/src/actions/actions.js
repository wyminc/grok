import axios from "axios";

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_MY_CARD = "GET_MY_CARD";

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
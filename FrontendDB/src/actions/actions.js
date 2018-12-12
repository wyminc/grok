
import axios from "axios";

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_MY_CARD = "GET_MY_CARD";
export const ADD_CARD_INFO = "ADD_NEW_CARD";

//~~~~~~~~~~ CARD ACTIONS ~~~~~~~~~~//
// export const getAllCards = (data) => {
//   console.log('ACTION GET ALL CARDS HITTING');
//   return {
//     type: GET_ALL_CARDS,
//     paylaod: 
//   }
// }

export const getAllCards = () => {
    return dispatch => {
        axios
        .get(`/all/A100001001`) 
        .then (response => {
            dispatch({ 
                type: GET_ALL_CARDS,
                payload: response.data
            })
        })
        .catch(err => {
            console.log("Error getting all cards: ", err)
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

export const addNewCardInfo = (info) => {
    return dispatch => {
        axios
        .post('/add', info)
        .then(response => {
            console.log("ADDING NEW CARD INFO: ", response.data )
            dispatch({
                type: ADD_CARD_INFO,
                payload: response.data
            })
        })
        .catch ( err => {
            console.log("Error adding new card info: ", err)
        })
    }
}
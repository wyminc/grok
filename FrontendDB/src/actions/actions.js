import axios from "axios";

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_MY_CARD = "GET_MY_CARD";

//~~~~~~~~~~ CARD ACTIONS ~~~~~~~~~~//
// export const getAllCards = (data) => {
//   console.log('ACTION GET ALL CARDS HITTING');
//   return {
//     type: GET_ALL_CARDS,
//     paylaod: 
//   }
// }

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
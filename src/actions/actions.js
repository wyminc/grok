
export const GET_ALL_CARDS = 'GET_ALL_CARDS'

//~~~~~~~~~~ CARD ACTIONS ~~~~~~~~~~//
export const getAllCards = (data) => {
  console.log('ACTION GET ALL CARDS HITTING');
  return {
    type: GET_ALL_CARDS,
    paylaod: data
  }
}
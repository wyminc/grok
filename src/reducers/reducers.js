import { GET_ALL_CARDS } from '../actions/actions.js'

const reducers = (state = {
  allProps: [],
  allCards: []
}, action) => {

  switch (action) {
    //~~~~ Cases ~~~~//
    case GET_ALL_CARDS:
      return { ...state, allCards: action.payload }
    default :
      return {...state};

  }
}

export default reducers;
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
<<<<<<< HEAD:src/reducers/reducers.js
      return {...state};
=======
      return {state}
>>>>>>> dc-docker-test:FrontendDB/src/reducers/reducers.js

  }
}

export default reducers;
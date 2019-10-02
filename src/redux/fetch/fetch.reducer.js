import { ApiTypes } from './fetch.types';

const INITIAL_STATE = {
  results: []
};

const fetchDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApiTypes.FETCH_API_DATA:
      return {
        ...state,
        results: action.payload.data
      };
    default:
      return state;
  }
};

export default fetchDataReducer;

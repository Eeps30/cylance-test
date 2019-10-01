import axios from 'axios';
import { ApiTypes } from './fetch.types';

const fetchApiData = () => dispatch => {
  axios.get('https://api.github.com/users/octocat/repos').then(response => {
    dispatch({
      type: ApiTypes.FETCH_API_DATA,
      payload: response
    });
  });
};

export { fetchApiData };

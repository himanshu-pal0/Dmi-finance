
import {
    API_REQUEST,
    API_FAILURE,
    API_SUCCESS,
  } from '../action/actionConst';
  
  const initialState = {
   movies:[]
  };
  
  const homereducer = (state = initialState, action) => {
    switch (action.type) {
      case API_REQUEST:
        return {
          ...state,
        };
      case API_FAILURE:
        return {
          ...state,
          movies:action.data.movies
        };
      case API_SUCCESS:
        return {
          ...state,
          movies:action.data
        };
      default:
        return state;
    }
  };
  
  export default homereducer;
  
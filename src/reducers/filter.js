import { SET_FILTER_APPLIED } from '../actions/filter';
import initialState from './initialState';

const filterReducer = (state = initialState.filter, action) => {  
  switch(action.type) {
    case SET_FILTER_APPLIED:
      return {
        ...state,
        filterApplied: action.filterApplied
      };
    default:
      return state;
  }
};

export default filterReducer;

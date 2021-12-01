// reducer for Filter
import initialState from './initialState';
import { SET_FILTER } from '../actions/filter';

const filterReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_FILTER:
      return {
        ...state,
        filterApplied : action.filterApplied
      };      
    default:
      return state;
    }
};

export default filterReducer;
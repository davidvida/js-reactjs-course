// reducer for UI
import { SET_DATA } from '../actions/task';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default tasksReducer;

// reducer for UI
import initialState from './initialState';
import { SET_LIST } from '../actions/tasks';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_LIST:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default tasksReducer;

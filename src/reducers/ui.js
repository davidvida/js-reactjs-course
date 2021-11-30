// reducer for UI
import { SET_LOADER } from '../actions/ui';
import initialState from './initialState';

const uiReducer = (state = initialState.ui, action) => {
  switch(action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default uiReducer;

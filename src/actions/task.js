export const SET_DATA = 'SET_DATA';
export const ADD_TASK = 'ADD_TASK';
export const SET_FILTER = 'SET_FILTER';
export const SET_TIMER = 'SET_TIMER';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
});

export const addNewTask = (newItem) => ({
  type: ADD_TASK,
  payload: newItem
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

export const setTimer = (timer) => ({
  type: SET_TIMER,
  payload: timer
});

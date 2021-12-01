export const SET_TASK_LIST = 'SET_TASK_LIST';
export const SET_TASK_FILTER = 'SET_TASK_FILTER';
export const SET_TASK_HIDE_TIMER = 'SET_TASK_HIDE_TIMER';

export const setList = (list) => ({
  type: SET_TASK_LIST,
  data: list
});

export const setFilter = (filter) => ({
  type: SET_TASK_FILTER,
  filterApplied: filter
}); 

export const setHideTimer = (timer) => ({
  type: SET_TASK_HIDE_TIMER,
  hideTimer: timer
}); 
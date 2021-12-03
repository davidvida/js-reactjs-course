// feature name
export const TASKS = '[TASKS]';

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;
export const ADD_TASKS = `${TASKS} ADD`;
// document actions
export const SET_TASK_LIST = "SET_TASK_LIST";
export const SET_TASK_FILTER = "SET_TASK_FILTER";
export const SET_TASK_HIDE_TIMER = "SET_TASK_HIDE_TIMER";

export const fetchTasks = ({ query }) => ({
  type: FETCH_TASKS,
  payload: query,
});

export const setList = (list) => ({
  type: SET_TASK_LIST,
  data: list,
});

export const setFilter = (filter) => ({
  type: SET_TASK_FILTER,
  filterApplied: filter,
});

export const setHideTimer = (timer) => ({
  type: SET_TASK_HIDE_TIMER,
  hideTimer: timer,
}); 

export const addTasks = ({ task }) => ({
  type: ADD_TASKS,
  payload: task,
});
/*
FETCH_TASKS -> API_START  -> API_SUCCESS -> SET_TASKS
               SET_LOADER                   SET_LOADER
                          -> API_FAILURE -> SET_NOTIFICATION
                                            SET_LOADER
*/


/*
POST_TASK ->  API_START  -> API_SUCCESS -> ADD_TASK
                          -> API_FAILURE -> SET_NOTIFICATION
*/

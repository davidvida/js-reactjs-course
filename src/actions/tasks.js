// feature name
export const TASKS = '[TASKS]';

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;
export const POST_TASK = `${TASKS} POST`;
export const PUT_TASK = `${TASKS} PUT`;
// document actions
export const ADD_TASKS = `${TASKS} ADD`;
export const UPDATE_TASKS = `${TASKS} UPDATE`;
export const SET_TASK_LIST = "SET_TASK_LIST";
export const SET_TASK_FILTER = "SET_TASK_FILTER";
export const SET_TASK_HIDE_TIMER = "SET_TASK_HIDE_TIMER";

export const fetchTasks = ({ query }) => ({
  type: FETCH_TASKS,
  payload: query,
});

export const addTasks = ({ response }) => ({
  type: ADD_TASKS,
  payload: response,
});

export const postTask = ({ task }) => ({
  type: POST_TASK,
  payload: task,
});

export const putTask = ({ task, paramId }) => ({
  type: PUT_TASK,
  payload: task,
  paramId
});

export const updateTasks = ({ response }) => ({
  type: UPDATE_TASKS,
  payload: response,
});

export const setList = ({ response }) => ({
  type: SET_TASK_LIST,
  data: response,
});

export const setFilter = (filter) => ({
  type: SET_TASK_FILTER,
  filterApplied: filter,
});

export const setHideTimer = (timer) => ({
  type: SET_TASK_HIDE_TIMER,
  hideTimer: timer,
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

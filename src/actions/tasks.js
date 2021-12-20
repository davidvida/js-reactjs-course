// feature name
export const TASKS = '[TASKS]';
export const USER_TASKS = '[USER_TASKS]';

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;
export const FETCH_USER_TASKS = `${USER_TASKS} FETCH`;
// document actions
export const SET_TASKS = `${TASKS} SET`;
export const POST_TASK = `${TASKS} POST`;
export const PUT_TASK = `${TASKS} PUT`;

export const fetchTasks = ({query}) => ({
  type: FETCH_TASKS,
  payload: query
});

export const setTasks = (list) => ({
  type: SET_TASKS,
  data: list
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

export const postTask = ({task}) => ({
  type: POST_TASK,
  payload: task
});

export const putTask = ({task, id}) => ({
  type: PUT_TASK,
  payload: task,
  paramId: id
});

export const fetchUserTasks = (list) => ({
  type: FETCH_USER_TASKS,
  data: list
});
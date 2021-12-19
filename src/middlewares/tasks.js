import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import { FETCH_TASKS, setTasks, addTasks, ADD_TASKS, SET_TASKS, UPDATE_TASKS, FILTER_TASKS, TIMER_TASKS, timerTasks, fetchTasks } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API = "https://davidvida-tasks-service.herokuapp.com/api/v1/task"

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch(action.type) {
    case FETCH_TASKS:
      next(apiStart({body: null, method: 'GET', url: TASKS_API}));
      next(setLoader(true));
      break;
    case ADD_TASKS:
      next(apiStart({body: action.payload, method: 'POST', url: TASKS_API}));
      next(setLoader(true));
    case UPDATE_TASKS:
      next(apiStart({body: action.payload, method: 'PUT', url: TASKS_API + "/" + action.payload._id}));
      next(setLoader(true));
    case FILTER_TASKS:
      next(apiStart({body: null, method: 'GET', url: TASKS_API + action.payload.id}));
      next(setLoader(true));
    case TIMER_TASKS:
      next(timerTasks({timer: action.payload}));
    case API_SUCCESS:
      if(SET_TASKS){
        next(setTasks({list: action.payload}));
        next(setLoader(false));
      }
      break;
    case API_FAILURE:
      next(setNotification({error: action.payload}));
      next(setLoader(false));
  }
};

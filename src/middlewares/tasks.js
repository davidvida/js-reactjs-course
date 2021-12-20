import { apiPostTask, apiStart, API_FAILURE, API_POST_TASK_SUCCESS, API_SUCCESS } from "../actions/api";
import { ADD_TASK, FETCH_TASKS, setShowTaskForm, setTasks, SET_SHOW_TASK_FORM, addTask, API_POST_TASK } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch(action.type) {
    case FETCH_TASKS:
      next(apiStart({body: null, method: 'GET', url: TASKS_API, query: action.payload}));
      next(setLoader(true));
      break;
    case API_POST_TASK:
      next(apiPostTask({body: action.payload, method: 'POST', url: TASKS_API}));
      next(setLoader(true));
      break;
    case API_SUCCESS:
      next(setTasks({list: action.payload}));
      next(setLoader(false));
      break;
    case API_POST_TASK_SUCCESS:
      next(addTask({task: action.payload}));
      next(setLoader(false));
      break;
    case API_FAILURE:
      next(setNotification({error: action.payload}));
      next(setLoader(false));
      break;
    case SET_SHOW_TASK_FORM:
      next(setShowTaskForm(action.payload));
      break;
  }
};

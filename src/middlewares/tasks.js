import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import { POST_TASKS, FETCH_TASKS, setTasks } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_GET = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch(action.type) {
    case POST_TASKS:
      // debugger
      console.log(action.payload,'para el post')
      next(apiStart({body: JSON.stringify(action.payload), method: 'POST', url: TASKS_API_GET}));
  //    next(setLoader(true));
      break;
    case FETCH_TASKS:
  //    debugger
      next(apiStart({body: null, method: 'GET', url: TASKS_API_GET}));
      next(setLoader(true));
      break;
    case API_SUCCESS:
  //    debugger
      next(setTasks({list: action.payload}));
      next(setLoader(false));
      break;
    case API_FAILURE:
      next(setNotification({error: action.payload}));
      next(setLoader(false));
  }
};

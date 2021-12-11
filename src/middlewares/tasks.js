import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import { FETCH_TASKS, setTasks, addTasks, ADD_TASKS, SET_TASKS } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_GET = "http://localhost:3000/data/tasks.json";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch(action.type) {
    case FETCH_TASKS:
      next(apiStart({body: null, method: 'GET', url: TASKS_API_GET}));
      next(setLoader(true));
      break;
    case ADD_TASKS:
      next(apiStart({body: action.payload, method: 'POST', url: TASKS_API_GET}));
    case API_SUCCESS:
      if(SET_TASKS){
        next(setTasks({list: action.payload}));
        next(setLoader(false));
      }
      if(ADD_TASKS){
        next(addTasks({task: action.payload}))
      }
      break;
    case API_FAILURE:
      next(setNotification({error: action.payload}));
      next(setLoader(false));
  }
};

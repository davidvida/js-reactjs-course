import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import { FETCH_TASKS, POST_TASK, PUT_TASK, setTasks } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_GET = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";
const TASKS_API_POST = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_TASKS:
      next(apiStart({ body: {}, method: 'GET', url: TASKS_API_GET }));
      next(setLoader(true));
      break;
    case API_SUCCESS:
      next(setTasks({ list: action.payload }));
      next(setLoader(false));
      break;
    case API_FAILURE:
      next(setNotification({ error: action.payload }));
      next(setLoader(false));
      break;
    case POST_TASK:
      next(apiStart({ body: action.payload, method: 'POST', url: TASKS_API_POST }));
      next(apiStart({ body: {}, method: 'GET', url: TASKS_API_GET }));
      next(setLoader(true));
      break;
    case PUT_TASK:
      next(
          apiStart(
              { 
                  body: action.payload, 
                  method: "PUT", 
                  url: `${TASKS_API_POST}/${action.paramId}` 
                }
            )
        );
  }
};
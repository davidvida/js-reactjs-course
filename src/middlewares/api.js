import { apiFailure, apiStart, apiSuccess, API_START } from "../actions/api";

const TASKS_API = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";
export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === API_START) {
    const { method, url } = action.meta;
    const body = action.payload;
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: !!body ? JSON.stringify(body) : null
    };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      if (method === 'GET'){
        dispatch(apiSuccess({response: data}));
      }
      else if (method === 'PUT') {
        dispatch(apiStart({body: null, method: 'GET', url: TASKS_API}));
      }
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
}

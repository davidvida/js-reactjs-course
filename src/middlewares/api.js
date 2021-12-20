import { apiFailure, apiPostTaskSuccess, apiPutTaskSuccess, apiSuccess, API_POST_TASK, API_PUT_TASK, API_START } from "../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === API_START || action.type === API_POST_TASK || action.type === API_PUT_TASK) {
    const { method, url, query } = action.meta || {};
    const body = action.payload || undefined;
    fetch(url, {method: method, body: JSON.stringify(body), headers: {'Content-Type': 'application/json'},})
    .then(response => response.json())
    .then(data => {
      if (action.type === API_POST_TASK) {
        dispatch(apiPostTaskSuccess({response: data}));
      } else if (action.type === API_PUT_TASK) {
        dispatch(apiPutTaskSuccess({response: data}));
      } else {
        if (Array.isArray(data) && query) {
          dispatch(apiSuccess({response: data.filter(task => task.user === query.user)}));
        } else {
          dispatch(apiSuccess({response: data}));
        }
      }
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
}

import { apiFailure, apiSuccess, API_START } from "../actions/api";
import { ADD_TASKS } from "../actions/tasks";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === API_START) {
    const { method, url } = action.meta;
    const body = action.payload;
    var newBody = null
    if (body !== null) {
      newBody = JSON.stringify(body)
    }
    fetch(url, { 
      method: method, 
      headers: { 'Content-Type': 'application/json' }, 
      body: newBody })
    .then(response => response.json())
    .then(data => {
      dispatch(apiSuccess({response: data}));
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
}

import { apiFailure, apiSuccess, postSuccess, API_START, API_POST } from "../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  console.info(action);
  if (action.type === API_START) {
    const { method, body, url } = action.meta;
    console.info('apiMiddleware', method, body, url, dispatch);
    fetch(url, { method: method, body: body })
    .then(response => response.json())
    .then(data => {
      dispatch(apiSuccess({response: data}));
    })
    .catch(function(error) {
      console.info(error);
      dispatch(apiFailure({error: error}));
    });
  }
  if (action.type === API_POST) {
    const { method, body, url } = action.meta;
    console.info('apiMiddleware', method, JSON.stringify(body), url, dispatch);
    const bodiest = JSON.stringify(body);
    const data = {
      method: method,
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body: bodiest
    };
    fetch(url, data)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(data => {
      dispatch(postSuccess({response: data}));
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
}

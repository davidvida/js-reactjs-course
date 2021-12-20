// action types
// event actions
export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
// Final project 
export const API_POST = 'API_POST';
export const API_PUT = 'API_PUT';
export const API_USER_GET_TASKS = 'API_USER_GET_TASKS';


export const apiStart = ({body, method, url, setList}) =>  ({
  type: API_START,
  payload: body,
  meta: { method, url, setList }
});

export const apiSuccess = ({response, setList}) =>  ({
  type: API_SUCCESS,
  payload: response,
  meta: setList
});

export const apiFailure = ({error}) =>  ({
  type: API_FAILURE,
  payload: error
});

// Final Project:
export const apiPost = ({body, method='POST', url}) => {
  return {
    type: API_POST,
    payload: body,
    meta: {method, url}
  };
}

export const apiPut = ({body, method='PUT', url}) => {
  return {
    type: API_PUT,
    payload: body,
    meta: {method, url}
  };
}
export const apiUserGetTasks = ({body, method='GET', url, setList}) => {
  return {
    type: API_USER_GET_TASKS,
    payload: body,
    meta: {method, url, setList}
  };
}
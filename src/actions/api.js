// action types
// event actions
export const API_START = 'API_START';
export const API_POST_TASK = 'API_POST_TASK';
export const API_SUCCESS = 'API_SUCCESS';
export const API_POST_TASK_SUCCESS = 'API_POST_TASK_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const apiStart = ({body, method, url}) =>  {
  return {
    type: API_START,
    payload: body,
    meta: {method, url}
  }
};

export const apiPostTask = ({body, method, url}) =>  {
  return {
    type: API_POST_TASK,
    payload: body,
    meta: {method, url}
  }
};

export const apiSuccess = ({response}) =>  {
  return {
    type: API_SUCCESS,
    payload: response
  };
};

export const apiPostTaskSuccess = ({response}) =>  {
  return {
    type: API_POST_TASK_SUCCESS,
    payload: response
  };
};

export const apiFailure = ({error}) =>  ({
  type: API_FAILURE,
  payload: error
});

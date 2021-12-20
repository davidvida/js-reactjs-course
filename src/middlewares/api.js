import { apiFailure, apiSuccess, dashboardSuccess , postSuccess, API_START, API_POST, API_SELF_START, API_PUT, API_DASHBOARD} from "../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  switch(action.type) {
    case API_START: {
      const { method, body, url } = action.meta;
      fetch(url, { method: method, body: body })
      .then(response => response.json())
      .then(data => {
        dispatch(apiSuccess({response: data}));
      })
      .catch(function(error) {
        dispatch(apiFailure({error: error}));
      });
      break;
    }
    case API_SELF_START: {
      const { method, body, url } = action.meta;
      fetch(url, { method: method })
      .then(response => response.json())
      .then(data => {
        dispatch(apiSuccess({response: data.filter(item => item.user === body.user)}));
      })
      .catch(function(error) {
        dispatch(apiFailure({error: error}));
      });
      break;
    }
    case API_POST: {
      fetch(action.meta.url, {
        method: action.meta.method,
        body: JSON.stringify(action.payload),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(data => {
        dispatch(postSuccess({response: data}));
      })
      .catch(function(error) {
        dispatch(apiFailure({error: error}));
      });
      break;
    }
    case API_PUT: {
      fetch(action.meta.url, {
        method: action.meta.method,
        body: JSON.stringify(action.payload),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(data => {
        dispatch(postSuccess({response: data}));
      })
      .catch(function(error) {
        dispatch(apiFailure({error: error}));
      });
      break;
    }
    case API_DASHBOARD: {
      fetch(action.meta.url, { method: action.meta.method, body: action.meta.body })
      .then(response => response.json())
      .then(data => {
        const completedTasks = data.filter(item => item.completed === true);
        const uncompletedTasks = data.filter(item => item.completed === false);
        dispatch(dashboardSuccess(
          {response:  [
            { argument: 'Completed', value: completedTasks.length},
            { argument: 'Uncompleted', value: uncompletedTasks.length}
          ]}
        ));
      })
      .catch(function(error) {
        dispatch(apiFailure({error: error}));
      });
      break;
    }
    default:
      break;
  }
}

import { apiFailure, apiSuccess, postSuccess, API_START, API_POST, API_SELF_START, API_PUT, API_DASHBOARD, dashboardSuccess } from "../actions/api";

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
      const { method, body, url } = action.meta;
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
      break;
    }
    case API_PUT: {
      const { method, body, url } = action.meta;
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
      break;
    }
    case API_DASHBOARD: {
      const { method, body, url } = action.meta;
      fetch(url, { method: method, body: body })
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

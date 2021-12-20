import axios from 'axios';
import { apiFailure, apiSuccess, API_START, API_POST, API_PUT, API_USER_GET_TASKS } from "../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case API_START:
      const { method, url, setList } = action.meta;
      const getData = { method, url };
      axios.request(getData)
        .then(response => {
          dispatch(apiSuccess({response: response.data, setList }));
        })
        .catch(function(error) {
          dispatch(apiFailure({error: error}));
        });
      break;

    case API_USER_GET_TASKS: {
      const { method, url, setList } = action.meta;
      console.log('Action:', action)
      const getData = { method, url };
      
      axios.request(getData)
        .then(response => {
          dispatch(apiSuccess({response: response && response.data ? response.data.filter(item => item.user === action.payload.user) : [], setList}));
        })
        .catch(function(error) {
          dispatch(apiFailure({error: error}));
        });
      break;
    }

    case API_POST: {
      const { method, url } = action.meta;
      const postData = { method, url, data: action.payload };
      axios.request(postData)
      .then(response => {
        console.log("New ID:", response.data._id);
        if (response.status === 200) {
          return response.data;
        }
      })
      .then(data => {
        dispatch(apiSuccess({response: data}));
      })
      .catch(function(error) {
        dispatch(apiFailure({error: error}));
      });
      break;
    }

    case API_PUT: {
      const { method, body, url } = action.meta;
      const jsonBody = JSON.stringify(body);
      const data = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonBody
      };
      fetch(url, data)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        dispatch(apiSuccess({response: data}));
      })
      .catch(function(error) {
        dispatch(apiFailure({error: error}));
      });
      break;
    }
  }
}

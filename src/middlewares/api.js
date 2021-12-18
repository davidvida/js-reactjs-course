import { apiFailure, apiStart, apiSuccess, API_START } from "../actions/api";
import { ADD_NEW_TASK, POST_TASK } from "../actions/tasks";


export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  console.log("asd++++++++++++++++++++++"+ action.type);
  next(action)
  // const { method, url } = action.meta;
  switch (action.type) {  
    case API_START:
      const { method,body, url } = action.meta;
      if(method === "POST"){
              fetch(action.meta.url, { 
        method: action.meta.method, 
        body: JSON.stringify(action.payload),
        headers:{'Content-Type': 'application/json'}
        }
      )
    .then(response => response.json())
    .then(data => {
       dispatch(apiStart({body: {}, method: 'GET', url: url}));
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
      }else {
     fetch(url, { method: method, body: body })
    .then(response => response.json())
    .then(data => {
       dispatch(apiSuccess({response: data}));
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
        break;
        default:
          break;        
  }
}

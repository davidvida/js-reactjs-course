import axios from "axios";
import { apiFailure, apiSuccess, API_START } from "../actions/api";

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === API_START) {
      const { method, url, onSuccess } = action.meta;
      const config = {
        method,
        url,
        data: action.payload,
      };
      axios
        .request(config)
        .then((response) => {
          console.log("response", response.data);
          dispatch(apiSuccess({ response: response.data, onSuccess }));
        })
        .catch((error) => {
          dispatch(apiFailure({ error: error }));
        });
    }
  };

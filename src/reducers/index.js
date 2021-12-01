import { combineReducers } from "redux";

import ui from './ui';
import tasks from './tasks';
import filter from './filter';


export default combineReducers({
  ui: ui,
  tasks: tasks,
  filter:filter,
});

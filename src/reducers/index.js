import { combineReducers } from "redux";

import ui from './ui';
import tasks from './tasks';


export default combineReducers({
  ui: ui,
  tasks: tasks
});

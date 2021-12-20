import React from "react";
import { Route, Routes, Outlet } from 'react-router';
import { BrowserRouter, Link } from "react-router-dom";
import NavigationBar from "Components/NavigationBar";
import TasksListPage from "./pages/TaskListPage";
import Tasks from "./pages/TaskListPage/Tasks"

import './styles.css';
import { Provider } from "react-redux";

import store from './store';

function App () {
  return (
    <React.StrictMode>
      <Provider store={store()}>
        <BrowserRouter>
          <Routes>
            {/* /tasks */}
            <Route path="/" element={<NavigationBar />}>
              <Route index element={<div>Landing Page</div>} />
              {/* /tasks */}
              <Route path="tasks" element={<TasksListPage />} />
              {/* /tasks/self */}
              {/* <Route path="tasks/self" element={<div>My Tasks</div>} /> */}
              <Route path="tasks/self" element={< Tasks />} />
              {/* /dashboard */}
              <Route path="dashboard" element={<div>Dashboard in construction</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

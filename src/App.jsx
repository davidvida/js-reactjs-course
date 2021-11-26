import React from "react";
import { Route, Routes, Outlet } from 'react-router';
import { BrowserRouter, Link } from "react-router-dom";
import NavigationBar from "Components/NavigationBar";
import TasksListPage from "./pages/TaskListPage";
import './styles.css';

function App () {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* /tasks */}
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<div>Landing Page</div>} />
            {/* /tasks */}
            <Route path="tasks" element={<TasksListPage />} />
            {/* /tasks/self */}
            <Route path="tasks/self" element={<div>My Tasks</div>} />
            {/* /dashboard */}
            <Route path="dashboard" element={<div>Dashboard in construction</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

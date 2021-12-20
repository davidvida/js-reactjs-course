import React, { useEffect, useState } from "react";
import TodoListContainer from "./TodoListContainer";

const TasksListPage = ({filter}) => {
  return (
    <TodoListContainer filter={filter}/>
  );
};

export default TasksListPage;

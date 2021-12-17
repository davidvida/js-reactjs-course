import React from "react";
import TodoListContainer from "./TodoListContainer";
import { useParams } from "react-router";

const TasksListPage = () => {
  const { user } = useParams();
  return <TodoListContainer user={user} />;
};

export default TasksListPage;

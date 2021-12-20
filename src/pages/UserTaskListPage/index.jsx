import React from "react";
import { useParams } from "react-router-dom"
import UserTaskContainer from "./UserTaskListContainer";

const UserTaskListPage = () => {
  const { user } = useParams();
  return (
    <UserTaskContainer user={user} />
  );
};

export default UserTaskListPage;
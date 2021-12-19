import React, { useState, useRef, useEffect } from "react";
import { Button, TextField } from '@mui/material';

const FormAddTask = ({ onSubmitCallback, onCancellCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskUser, setTaskUser] = useState("");

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }

  const onChangeDescription = (event) => {
    setTaskDescription(event.target.value);
  }
  
  const onChangeUser = (event) => {
    setTaskUser(event.target.value);
  }

  const onAddTask = (event) => {
    event.preventDefault();
    onSubmitCallback({
      name: taskName,
      description: taskDescription,
      user: taskUser
    });
    setTaskName("");
    setTaskDescription("");
    setTaskUser("");
  };

  return (
    <form>
      <div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Name"
            fullWidth
            variant="standard"
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Task Description"
            fullWidth
            variant="standard"
            onChange={onChangeDescription}
          />
          <TextField
            autoFocus
            margin="dense"
            id="user"
            label="User"
            fullWidth
            variant="standard"
            onChange={onChangeUser}
          />
      </div>
      <Button onClick={onCancellCallback}>Cancel</Button>
      <Button onClick={onAddTask}>Add Task</Button>
    </form>
  );
};

export default FormAddTask;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [open, setOpen] = React.useState(false);

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  };
  const onChangeDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const onSubmitListener = (event) => {
    event.preventDefault();
    onSubmitCallback({
      name: taskName,
      description: taskDescription,
      labels: [],
      startDate: "",
      endDate: "",
      completed: false,
      user: "David",
    });
    setTaskName("");
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            type="text"
            fullWidth
            variant="standard"
            id="taskName"
            name="name"
            autoComplete="off"
            value={taskName}
            onChange={onChangeName}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            id="taskDescription"
            name="description"
            autoComplete="off"
            value={taskDescription}
            onChange={onChangeDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmitListener}>Add Task</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default FormAddTask;

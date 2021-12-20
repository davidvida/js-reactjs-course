import React, { useState, useRef, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }

  const onChangeDesc = (event) => {
    setTaskDesc(event.target.value);
  }

  const addTask = () => {
    onSubmitCallback({name: taskName, description: taskDesc});
    handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Task
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the values for the new task
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Task name"
            type="text"
            fullWidth
            variant="standard"
            value={taskName}
            onChange={onChangeName}
          />
          <TextField
            margin="dense"
            id="taskDesc"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={taskDesc}
            onChange={onChangeDesc}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTask}>Add</Button>
        </DialogActions>
      </Dialog>
      </div>
  );
};

export default FormAddTask;

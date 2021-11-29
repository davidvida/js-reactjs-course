import React, { useState, useRef, useEffect } from "react";
import { TextField, Button, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
   const [open, setOpen] = React.useState(false);

  
  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }

  const onSubmitListener = (event) => {
    event.preventDefault();
    onSubmitCallback({
      name: taskName
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
  // main -> feature/david-mamani_dialog
  return (
    <form >
        <Button variant="outlined" onClick={handleClickOpen}>
          Add New Task
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Name"
            type="email"
            fullWidth
            variant="standard"
            id="taskName"
            name="name"
            autoComplete="off"
            value={taskName}
            onChange={onChangeName}
        />
        </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmitListener} >Add Task</Button>
      </DialogActions>
      </Dialog>
    </form>
  );
};

export default FormAddTask;

import React, { useState, useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const inputRef = useRef();

  const [open, setOpen] = React.useState(false);


  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

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

  return (
    <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      Add Task
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="taskName"
          name="taskName"
          label="New Task"
          type="text"
          fullWidth
          variant="standard"
          ref={inputRef}
          onChange={onChangeName}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmitListener}>Add Task</Button>
      </DialogActions>
    </Dialog>
  </div>
  );
};

export default FormAddTask;

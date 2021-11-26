import React, { useState, useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './styles';

const DialogForm = ({ addTask })=> {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const [taskName, setTaskName] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitListener = (event) => {
    event.preventDefault();

    addTask({
      name: taskName
    });
    setTaskName("");
    handleClose();
  };

  const changeName = (e)=> {
    setTaskName(e.target.value)
    // console.log(e.target.value);

  };

  return (
    <div className={classes.containerDialog}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Allow to add a new task
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task name"
            type="text"
            fullWidth
            variant="standard"
            onChange={changeName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmitListener}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogForm;
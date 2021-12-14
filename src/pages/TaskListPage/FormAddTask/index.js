import React, { useState, useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChipInput from 'material-ui-chip-input'

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskLabels, setTaskLabels] = useState([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }

  const onChangeDescription = (event) => {
    setTaskDescription(event.target.value);
  }

  const onChangeLabels = (chips) => {
    setTaskLabels(chips);
  }

  const onSubmitListener = (event) => {
    event.preventDefault();
    setTaskName("");
    setTaskDescription('');
    setTaskLabels([]);
    handleClose();
    onSubmitCallback({
      name: taskName,
      description: taskDescription,
      labels: taskLabels
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your new task name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Task name"
            type="text"
            value={taskName}
            onChange={onChangeName}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Add task description
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="taskDescription"
            label="Task description"
            type="text"
            value={taskDescription}
            onChange={onChangeDescription}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Add task description
          </DialogContentText>
          <ChipInput
            id="taskLabels"
            onChange={(chips) => onChangeLabels(chips)}
            >

          </ChipInput>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmitListener}>Add task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormAddTask;

import React, { useState, useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [label1, setTaskLabel1] = useState("");
  const [label2, setTaskLabel2] = useState("");
  const [label3, setTaskLabel3] = useState("");
  const [open, setOpen] = React.useState(false);

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }
  
  const onChangeDescription = (event) => {
    setTaskDescription(event.target.value);
  }

  const onChangeLabel1 = (event) => {
    setTaskLabel1(event.target.value);
  }

  const onChangeLabel2 = (event) => {
    setTaskLabel2(event.target.value);
  }

  const onChangeLabel3 = (event) => {
    setTaskLabel3(event.target.value);
  }

  const onSubmitListener = (event) => {
    event.preventDefault();
    let labelList = [];
    if (label1) { labelList.push(label1); }
    if (label2) { labelList.push(label2); }
    if (label3) { labelList.push(label3); }
    onSubmitCallback({
      name: taskName,
      description: taskDescription,
      labels: labelList,
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      completed: false,
      user: "Sandy"
    });
    setTaskLabel1("")
    setTaskLabel2("")
    setTaskLabel3("")
    setTaskDescription("")
    setTaskName("")
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
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a task, please enter your new task here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            name="taskName"
            label="Task Name"
            type="text"
            value={taskName}
            autoComplete="off"
            fullWidth
            variant="standard"
            onChange={onChangeName}
          />
          <TextField          
            margin="dense"
            id="taskDescription"
            name="taskDescription"
            label="Task Description"
            type="text"
            value={taskDescription}
            autoComplete="off"
            fullWidth
            variant="standard"
            onChange={onChangeDescription}
          />          
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic1" value={label1} onChange={onChangeLabel1} label="Label 1" variant="standard" />
            <TextField id="outlined-basic2" value={label2} onChange={onChangeLabel2} label="Label 2" variant="standard" />
            <TextField id="outlined-basic3" value={label3} onChange={onChangeLabel3} label="Label 3" variant="standard" />
          </Box>
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

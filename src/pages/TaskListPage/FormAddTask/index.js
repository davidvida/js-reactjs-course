import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = React.useState(false);
  const onChangeName = (event) => {
    setTaskName(event.target.value);
  };

  const onSubmitListener = (event) => {
    event.preventDefault();
    if (taskName !== "") {
      onSubmitCallback({
        name: taskName,
      });
      setTaskName("");
    } else {
      alert("The task name shouldn't be empty");
    }
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
        New Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            name="name"
            margin="dense"
            id="taskName"
            label="Task name"
            type="text"
            value={taskName}
            fullWidth
            variant="standard"
            onChange={onChangeName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSubmitListener}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormAddTask;

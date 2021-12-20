import React, { useState } from "react";
import { Button, Stack, TextField } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterMoment';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


const FormAddTask = ({ onSubmitCallback, onCancellCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskUser, setTaskUser] = useState("Gary");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [labels, setLabels] = useState([]);

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
    if (taskName) {
      onSubmitCallback({
        name: taskName,
        description: taskDescription,
        startDate,
        endDate,
        labels,
        user: taskUser
      });
      setTaskName("");
      setTaskDescription("");
      setTaskUser("");
    }
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
            required
          />
          <TextField
            margin="dense"
            id="description"
            label="Task Description"
            fullWidth
            variant="standard"
            onChange={onChangeDescription}
          />
          <TextField
            margin="dense"
            id="user"
            label="User"
            fullWidth
            variant="standard"
            defaultValue={taskUser}
            onChange={onChangeUser}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label='Start Date'
                inputFormat="dd/MM/yyyy"
                value={startDate}
                onChange={setStartDate}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label='End Date'
                inputFormat="dd/MM/yyyy"
                value={endDate}
                onChange={setEndDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
      </div>
      <Button onClick={onCancellCallback}>Cancel</Button>
      <Button onClick={onAddTask}>Add Task</Button>
    </form>
  );
};

export default FormAddTask;

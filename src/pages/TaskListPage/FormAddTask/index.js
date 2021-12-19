import React, { useState, useRef, useEffect } from "react";

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskUser, setTaskUser] = useState("");
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }

  const onChangeDescription = (event) => {
    setTaskDescription(event.target.value)
  }

  const onChangeUser = (event) => {
    setTaskUser(event.target.value);
  }

  const onSubmitListener = (event) => {
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
    <form onSubmit={onSubmitListener}>
      <div>
        <label htmlFor="taskName">Name</label>
        <input
          style={{ position: "absolute", left: "31%" }}
          type="text"
          id="taskName"
          name="name"
          autoComplete="off"
          ref={inputRef}
          value={taskName}
          onChange={onChangeName} />
        <br />
        <label htmlFor="taskDescription">Description</label>
        <input
          style={{ position: "absolute", left: "31%" }}
          type="text"
          id="taskDescription"
          name="description"
          autoComplete="off"
          ref={inputRef}
          value={taskDescription}
          onChange={onChangeDescription} />
        <br />
        <label htmlFor="taskUser">User</label>
        <input
          style={{ position: "absolute", left: "31%" }}
          type="text"
          id="taskUser"
          name="user"
          autoComplete="off"
          ref={inputRef}
          value={taskUser}
          onChange={onChangeUser} />
      </div>
      <div>
        <button type="submit" id="submitForm">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default FormAddTask;

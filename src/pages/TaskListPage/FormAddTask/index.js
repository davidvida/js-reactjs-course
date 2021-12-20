import React, { useState, useRef, useEffect } from "react";

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }

  const onChangeDescription = (event) => {
    setTaskDescription(event.target.value);
  }

  const onSubmitListener = (event) => {
    event.preventDefault();
    onSubmitCallback({
      name: taskName,
      description:taskDescription
    });
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={onSubmitListener}>
      <div>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          name="name"
          autoComplete="off"
          ref={inputRef}
          value={taskName}
          onChange={onChangeName} />
      </div>
      <div>
        <label htmlFor="taskDescription">Description</label>
        <input
          type="text"
          id="taskDescription"
          name="description"
          autoComplete="off"
          value={taskDescription}
          onChange={onChangeDescription} />
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

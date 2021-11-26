import React, { useState, useRef, useEffect } from "react";

const FormAddTask = ({ onSubmitCallback }) => {
  const [taskName, setTaskName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeName = (event) => {
    setTaskName(event.target.value);
  }

  const onSubmitListener = (event) => {
    event.preventDefault();
    onSubmitCallback({
      name: taskName
    });
    setTaskName("");
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
        <button type="submit" id="submitForm">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default FormAddTask;

import React from "react";
import {
  Button,
  Container,
  Divider,
  List,
  Paper,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// import Timer from '../Timer';
import Timer from "Components/TimerFunction";
import TodoListItem from "../TodoListItem";
import FormAddTask from "../FormAddTask";
import Toggle from "Components/Toggle";
import LoadingIndicator from "Components/LoadingIndicator";
import { setShowTaskForm, apiPostTask } from "../../../actions/tasks";
import { connect } from "react-redux";

/*
 * class based component
 */
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.showAddTaskForm = this.showAddTaskForm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  showAddTaskForm() {
    this.props.setShowTaskForm(!this.props.showTaskForm);
  }

  handleClose() {
    this.props.setShowTaskForm(false);
  }

  handleAddTask(task) {
    this.props.addTask(task);
    this.props.setShowTaskForm(false);
  }

  //render method
  render() {
    const {
      list,
      filterApplied,
      toggleTimer,
      toggleListItem,
      performAddTask,
      showLoader,
      showTaskForm,
    } = this.props;
    return (
      <Container>
        <LoadingIndicator show={showLoader} />
        {list.length > 0 && !showLoader && (
          <>
            <Toggle
              active={filterApplied}
              label="Hide completed"
              onToggle={toggleListItem}
            />
            <Button variant="outlined" onClick={this.showAddTaskForm}>
              Add New Task
            </Button>
            <Dialog open={showTaskForm} onClose={() => {}}>
              <DialogTitle>ADD NEW TASK</DialogTitle>
              <DialogContent>
                <FormAddTask
                  onSubmitCallback={this.handleAddTask}
                  onCancellCallback={this.handleClose}
                />
              </DialogContent>
            </Dialog>
            <Paper>
              <List>
                {list
                  .filter((item) => (!filterApplied ? true : !item.completed))
                  .map((item, index, array) => {
                    return (
                      <>
                        <TodoListItem
                          key={item.id}
                          completed={item.completed}
                          name={item.name}
                          description={item.description}
                          user={item.user}
                          startDate={item.startDate}
                          endDate={item.endDate}
                          labels={item.labels}
                        />
                        {index < array.length - 1 && <Divider />}
                      </>
                    );
                  })}
              </List>
            </Paper>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showTaskForm: state.tasks.showTaskForm,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    setShowTaskForm: (showTaskForm) => dispatch(setShowTaskForm(showTaskForm)),
    addTask: (task) => dispatch(apiPostTask(task)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(TodoList);

import React from 'react';
import { Container, Divider, List, Paper } from '@mui/material';
// import Timer from '../Timer';
import Timer from 'Components/TimerFunction';
import TodoListItem from '../TodoListItem';
import FormAddTask from '../FormAddTask';
import Toggle from 'Components/Toggle';
import LoadingIndicator from 'Components/LoadingIndicator';

/*
* class based component
*/
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  //render method
  render() {
    const { list, filterApplied, toggleTimer, toggleListItem, performAddTask, showLoader } = this.props;
    return (
      <Container>
        {/* <div>
          <span>
            <input type="checkbox" id="hideTimer" onChange={this.toggleTimer} defaultChecked={hideTimer}/>
            <label htmlFor="hideTimer">Hide Timer</label>
          </span>
          { !hideTimer && <Timer /> }

        </div> */}
        <FormAddTask onSubmitCallback={performAddTask} />
        <LoadingIndicator show={showLoader} />
        { list.length > 0 && (
          <>
            <Toggle active={filterApplied} label="Hide completed" onToggle={toggleListItem} />
            
            <Paper>
              <List>
              {list.filter(item => (!filterApplied ? true : !item.completed)).map((item, index, array) => {
                return (
                  <React.Fragment key={item.id}>
                    <TodoListItem key={item.id} completed={item.completed} name={item.name} />
                    { index < array.length -1  && <Divider /> }
                  </React.Fragment>
                )
              })}
              </List>
            </Paper>
          </>
        )}
      </Container>
    );
  }

}

export default TodoList;

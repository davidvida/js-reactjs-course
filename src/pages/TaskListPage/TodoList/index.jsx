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
    const { list, filter, toggleTimer, toggleListItem, performAddTask, showLoader, performUpdateTask } = this.props;
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
            <Toggle active={filter.filterApplied} label="Hide completed" onToggle={toggleListItem} />
            
            <Paper>
              <List>
                {list.filter(item => (!filter.filterApplied ? true : !item.completed) && (!!filter.user ? filter.user === item.user : true)).map((item, index, array) => {
                return (
                  <>
                    <TodoListItem key={item.id} item={item} performUpdateTask={performUpdateTask} />
                    { index < array.length -1  && <Divider /> }
                  </>
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

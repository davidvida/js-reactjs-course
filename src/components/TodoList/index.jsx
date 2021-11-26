import React from 'react';
// import Timer from '../Timer';
import Timer from '../TimerFunction';
import TodoListItem from '../TodoListItem';
import FormAddTask from '../FormAddTask';
import { Container, Divider, List, Paper, Switch } from '@mui/material';
import Toggle from '../Toggle';

/*
* class based component
*/
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  //render method
  render() {
    const { list, filterApplied, toggleTimer, toggleListItem, performAddTask } = this.props;
    return (
      <Container>
        {/* <div>
          <span>
            <input type="checkbox" id="hideTimer" onChange={this.toggleTimer} defaultChecked={hideTimer}/>
            <label htmlFor="hideTimer">Hide Timer</label>
          </span>
          { !hideTimer && <Timer /> }

        </div> */}
        {/* <FormAddTask onSubmitCallback={performAddTask} /> */}
        <Toggle active={filterApplied} label="Hide completed" onToggle={toggleListItem} />
        <Paper>
          <List>
          {list.filter(item => (!filterApplied ? true : !item.completed)).map((item, index, array) => {
            return (
              <>
                <TodoListItem key={item.id} completed={item.completed} name={item.name} />
                { index < array.length -1  && <Divider /> }
              </>
            )
          })}
          </List>
        </Paper>
      </Container>
    );
  }

}

export default TodoList;

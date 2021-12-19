import React from 'react';
import { Container, Divider, List, Paper } from '@mui/material';
// import Timer from '../Timer';
import Timer from 'Components/TimerFunction';
import { Box } from '@mui/system';
import TodoListItem from '../TodoListItem';
import FormAddTask from '../FormAddTask';
import Toggle from 'Components/Toggle';
import LoadingIndicator from 'Components/LoadingIndicator';
import { display } from '@mui/system';

/*
* class based component
*/
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  //render method
  render() {
    const { list, filterApplied, toggleTimer, toggleListItem, performAddTask, showLoader, hideTimer } = this.props;
    return (
      <Container>
        <FormAddTask onSubmitCallback={performAddTask} />
        <LoadingIndicator show={showLoader} />
        <Box display= "flex">
        <Toggle active={filterApplied} label="Hide completed" onToggle={toggleListItem} />
        </Box>
        { list.length > 0 && (
          <>
            <Paper>
              <List>
              {list.filter(item => (!filterApplied ? true : !item.completed)).map((item, index, array) => {
                return (
                  <>
                    <TodoListItem key={item.id} completed={item.completed} name={item.name} completedItem={item}/>
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

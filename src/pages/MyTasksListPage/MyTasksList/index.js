import React from 'react';
import { Container, Divider, List, Paper } from '@mui/material';
import TodoListItem from '../../TaskListPage/TodoListItem';
import Toggle from 'Components/Toggle';
import FormAddTask from '../../TaskListPage/FormAddTask';
import LoadingIndicator from 'Components/LoadingIndicator';

class MyTodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, filterApplied, toggleListItem,performAddTask, showLoader, performUpdateTask } = this.props;
    return (
      <Container>
        <FormAddTask onSubmitCallback={performAddTask} />
        <LoadingIndicator show={showLoader} />
        { list && list.length > 0 && (
          <>
            <Toggle active={filterApplied} label="Hide completed" onToggle={toggleListItem} />
            
            <Paper>
              <List>
              {list.filter(item => (!filterApplied ? true : !item.completed)).map((item, index, array) => {
                return (
                  <>
                    <TodoListItem 
                      key={item._id}
                      completed={item.completed}
                      name={item.name}
                      enabled={true}
                      item={item}
                      updateTask={performUpdateTask}/>
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

export default MyTodoList;
import React from 'react';
import { Container, Divider, List, Paper } from '@mui/material';
import TodoListItem from '../../TaskListPage/TodoListItem';
import Toggle from 'Components/Toggle';
import LoadingIndicator from 'Components/LoadingIndicator';

/*
* class based component
*/
class SelfTodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  //render method
  render() {
    const { list, filterApplied, toggleTimer, toggleListItem, performAddTask, showLoader } = this.props;
    return (
      <Container>
        <LoadingIndicator show={showLoader} />
        { list && list.length > 0 && (
          <>
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
          </>
        )}
      </Container>
    );
  }

}

export default SelfTodoList;

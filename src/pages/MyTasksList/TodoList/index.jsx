import React from 'react';
import { Container, Divider, List, Paper } from '@mui/material';
// import Timer from '../Timer';
import Timer from 'Components/TimerFunction';
import MyTodoListItem from '../TodoListItem';
import Toggle from 'Components/Toggle';
import LoadingIndicator from 'Components/LoadingIndicator';

/*
* class based component
*/
class MyTodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  //render method
  render() {
    const { list, filterApplied, toggleTimer, toggleListItem, showLoader } = this.props;
    return (
      <Container>

        <LoadingIndicator show={showLoader} />
        { list.length > 0 && (
          <>
            <Toggle active={filterApplied} label="Hide completed" onToggle={toggleListItem} />
            
            <Paper>
              <List>
              {list.filter(item => ((!filterApplied ? true : !item.completed) && item.user=="Efrain_Espadero")).map((item, index, array) => {
                return (
                  <>
                    <MyTodoListItem key={item.id} completed={item.completed} name={item.name} description={item.description}/>
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

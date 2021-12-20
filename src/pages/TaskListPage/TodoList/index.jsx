import React from 'react';
import { Box, Container, Divider, List, Paper } from '@mui/material';
import TodoListItem from '../TodoListItem';
import FormAddTask from '../FormAddTask';
import Toggle from 'Components/Toggle';
import LoadingIndicator from 'Components/LoadingIndicator';
import ChartPie from '../../../components/Chart';
import Typography from '@mui/material/Typography';

/*
* class based component
*/
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  getListByUser(taskList, userName) {
    let listByUser = [];

    if (!taskList instanceof Array) {
      return listByUser
    }
    if (!(userName === "All") && taskList instanceof Array) {
      taskList.filter(item => {
        if (item.user === userName) {

          listByUser.push(item);
        }
      })
      return listByUser
    }
    return taskList
  };

  //render method
  render() {
    const { list, filterApplied, toggleListItem, performAddTask, showLoader, performUpdateTask, userName } = this.props;
    const listByUser = this.getListByUser(list, userName);
    return (
      <>
        <Typography
          component="div"
          variant="body1"
          style={{
            height: 100,
            width: '100%',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              justifyContent: 'space-between',
              bgcolor: 'grey.700',
              color: 'white',
              p: 2,
              position: 'right',
              top: 20,
              left: '40%',

            }}
          >
            {`Username: ${userName} `}
          </Box>

        </Typography>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', top: 20, p: 1.5 }} >
            <FormAddTask onSubmitCallback={performAddTask} />
            <Toggle active={filterApplied} label="Hide completed" onToggle={toggleListItem} />
          </Box>
          <Box>
            <Box sx={{ display: "grid", justifyContent: 'space-between', gap: 2, gridTemplateColumns: "repeat(3, 2fr)", border: '2px grey' }}>
              <Box sx={{ gridColumn: "1/3", }}>
                <LoadingIndicator show={showLoader} />
                {listByUser.length > 0 && (
                  <>
                    <Paper>
                      <List>
                        {listByUser.filter(item => (!filterApplied ? true : !item.completed)).map((item, index, array) => {
                          return (
                            <>
                              <TodoListItem key={item.id} item={item} performUpdateTask={performUpdateTask} />
                              {index < array.length - 1 && <Divider />}
                            </>
                          )
                        })}
                      </List>
                    </Paper>
                  </>
                )}
              </Box>

              <Box sx={{ gridColumn: "3/3" }}>
                {((listByUser.length === 0)) ? <></> : <ChartPie list={listByUser} />}

              </Box>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}

export default TodoList;

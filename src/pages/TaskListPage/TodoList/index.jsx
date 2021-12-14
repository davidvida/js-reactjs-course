import React from "react";
import { Container, Divider, List, Paper, Box, Typography } from "@mui/material";
// import Timer from '../Timer';
import Timer from "Components/TimerFunction";
import TodoListItem from "../TodoListItem";
import FormAddTask from "../FormAddTask";
import Toggle from "Components/Toggle";
import LoadingIndicator from "Components/LoadingIndicator";
import ChartCard from "../../../components/ChartCard";

/*
 * class based component
 */
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  //render method
  render() {
    const {
      list,
      filterApplied,
      toggleTimer,
      toggleListItem,
      performAddTask,
      performUpdateTask,
      showLoader,
      user,
    } = this.props;
    return (
      <Container>
        {/* <div>
          <span>
            <input type="checkbox" id="hideTimer" onChange={this.toggleTimer} defaultChecked={hideTimer}/>
            <label htmlFor="hideTimer">Hide Timer</label>
          </span>
          { !hideTimer && <Timer /> }

        </div> */}
        <Box>
          {user ? <Typography variant="h3">Welcome: {user}</Typography> : null}
          <Box display="flex" justifyContent="space-between">
            <FormAddTask onSubmitCallback={performAddTask} />
            <Toggle
              active={filterApplied}
              label="Hide completed"
              onToggle={toggleListItem}
            />
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            <Box sx={{ gridColumn: "1/3" }}>
            <LoadingIndicator show={showLoader} />
              {list.length > 0 && (
                <>
                  <Paper>
                    <List>
                      {list
                        .filter((item) =>
                          !filterApplied ? true : !item.completed
                        )
                        .map((item, index, array) => {
                          return (
                            <React.Fragment key={item._id}>
                              <TodoListItem
                                key={item._id}
                                item={item}
                                performUpdateTask={performUpdateTask}
                              />
                              {index < array.length - 1 && <Divider />}
                            </React.Fragment>
                          );
                        })}
                    </List>
                  </Paper>
                </>
              )}
            </Box>
            <Box sx={{ gridColumn: "3/3" }}>
              <ChartCard data={list}></ChartCard>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default TodoList;

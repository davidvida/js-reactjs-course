import React, { Component } from "react";
import { Container, Divider, List, Paper } from '@mui/material';
import TodoListItem from '../../TaskListPage/TodoListItem';
import LoadingIndicator from 'Components/LoadingIndicator';
import SearchBar from '../../../components/SearchBar';
import MyTaskItem from "../MyTaskItem";
import Timer from 'Components/TimerFunction';
import { Box } from "@mui/system";
import ChartCard from "../../../components/ChartCard";

/*
* class based component
*/
class MyTasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: ""
    };
    this.buildDataForReport = this.buildDataForReport.bind(this);
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.filterBySearchText = this.filterBySearchText.bind(this);
  }

  onChangeSearchText(text){
      this.setState({
          searchText: text
      })
  }

  filterBySearchText(items, text){
      if(text && items.length > 0){
          return items.filter(item => item.user.toLowerCase().includes(text.toLowerCase()));
      }
      return items;
  }

  buildDataForReport(list){
    let doneTask = 0;
    let pending = 0;
    if(list.length > 0){
        list.forEach(element => {
            if(element.completed){
                doneTask +=1;
            }else{
                pending +=1;
            }
        });
      }
    return {
        done: doneTask,
        pending: pending
    }
  }

  //render method
  render() {
    const { list, filterApplied, showLoader, toggleTimer, hideTimer, performStartTask } = this.props;
    const { searchText} = this.state;
    let filterItems = this.filterBySearchText(list, searchText);
    return (
      <Container>
        {<div>
          { hideTimer && <Timer /> }
        </div>}
        <Box display="flex" justifyContent="space-between">
        <SearchBar placeholder="Type for search" onChangeCallback={this.onChangeSearchText}/>
        </Box>
        <LoadingIndicator show={showLoader} />
        <Box sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(3, 1fr)"
        }}>
        <Box sx={{gridColumn: "1/3"}}>
        { filterItems.length > 0 && (
          <>
            <Paper>
              <List>
              {filterItems.filter(item => (!filterApplied ? true : !item.completed)).map((item, index, array) => {
                return (
                  <>
                    <MyTaskItem 
                    key={item.id} 
                    completed={item.completed} 
                    name={item.name} 
                    completedItem={item}
                    onChangeCallback={performStartTask}
                    />
                    { index < array.length -1  && <Divider /> }
                  </>
                )
              })}
              </List>
            </Paper>
          </>
        )}
        </Box>
        <Box >
              <ChartCard data={this.buildDataForReport(filterItems)}/>
        </Box>
        </Box>
      </Container>
    );
  }

}

export default MyTasksList;

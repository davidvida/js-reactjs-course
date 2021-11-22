import React, { Component } from "react";
// import TodoList from "../../components/TodoList";
import ListContainer from  "../../components/ListContainer";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    // comunicate an external service to get data
    fetch("http://localhost:3000/data/tasks.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        list: data.list
      });
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  render() {
    const { list } = this.state;
    return (
      // <TodoList list={list} />
      <ListContainer list={list} />
    )
  }
}

export default TodoListContainer;

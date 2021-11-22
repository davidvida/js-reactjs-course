import React from 'react';
import Timer from '../TimerFunction';
import TodoListItem from '../TodoListItem';

/*
* class based component
*/
class TodoList extends React.Component {
  // constructor
  constructor(props) {
    super(props);
  }

  //render method
  render() {
    const { filterApplied, hideTimer } = this.props;
    const { list } = this.props;
    return (
      <>
        <ul>
          {list.filter(item => (!filterApplied ? true : !item.completed)).map(item => {
            return (
              <TodoListItem completed={item.completed} name={item.name} />
            )
          })}
        </ul>
      </>
    );
  }

}

export default TodoList;

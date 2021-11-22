import React from "react";
import Timer from '../TimerFunction';
import TodoList from "../TodoList";


class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterfilterApplied: false,
            hideTimer: false
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.toggleListItem = this.toggleListItem.bind(this);
    }
    
    toggleTimer(event) {
        this.setState({
            hideTimer: event.currentTarget.checked
        });
    }

    toggleListItem(event) {
        this.setState({
            filterApplied: event.currentTarget.checked
        });
    }

    render() {
        const { filterApplied, hideTimer } = this.state;
        const { list } = this.props;
        return (
            <>
                <div>
                    <span>
                        <input type="checkbox" id="hideTimer" onChange={this.toggleTimer} defaultChecked={hideTimer}/>
                        <label htmlFor="hideTimer">Hide Timer</label>
                    </span>
                    { !hideTimer && <Timer /> }

                </div>
                <span>
                    <input type="checkbox" id="showPending" onChange={this.toggleListItem} defaultChecked={filterApplied}/>
                    <label htmlFor="showPending">Hide Completed</label>
                </span>
                <TodoList list={list} filterApplied={filterApplied} />
            </> 
        );
    }
}

export default ListContainer;

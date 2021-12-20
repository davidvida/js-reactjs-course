import React, { Component } from "react";
import { Box } from "@mui/material";
const styles = { color: 'white', backgroundColor: 'blue' }

class Timer extends Component {

  constructor(props) {
    console.log('constructor exec');
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    var countDownDate = new Date(this.state.time).getTime();

    setInterval(() => {
      var now = new Date().getTime();
      var distance = now - countDownDate;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var format = `${days} d ${hours} h ${minutes} m ${seconds} s`
      this.setState({
        format: format
      })
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate exec');
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUnmount() {
    // remove the interval here
  }

  render() {
    const { format } = this.state;
    return (
      <div id="timer" style={styles}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            bgcolor: 'background.paper',
            color: 'text.secondary',
            fontSize: 18
          }}
        >
          {`Duration: ${format}`}
        </Box>
      </div>
    );
  }
}

export default Timer;

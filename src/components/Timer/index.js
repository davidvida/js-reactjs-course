import { Box } from "@mui/material";
import React, { Component } from "react";
const styles = { color: 'white', backgroundColor: 'blue' }

// class based component
class Timer extends Component {

  constructor(props) {
    console.log('constructor exec');
    super(props);

    this.state = {
      // time: new Date()
      time: this.props.taskTime,
      format: `0 d 0 h 0 m 0 s`
    };
  }

  // componentDidMount
  componentDidMount() {
    var countDownDate = new Date(this.state.time).getTime();

    setInterval(() => {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = now - countDownDate;
      // Time calculations for days, hours, minutes and seconds
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

  // componentDidUpdate() {
  //   console.log('componentDidUpdate exec');
  // }

  // shouldComponentUpdate() {
  //   return true;
  // }

  componentWillUnmount() {
    // remove the interval here
  }


  render() {
    console.log('render exec');
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

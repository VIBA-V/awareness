import React from "react";
import "../layout.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  tick() {
    const { duration, timeoutFn } = this.props;
    if (this.state.seconds === duration) {
      timeoutFn();
    } else {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { duration } = this.props;
    let timeLeft = duration - this.state.seconds;
    return (
      <div className="timer">
        <h1>
          Time Left: <span>{timeLeft}</span> S
        </h1>
      </div>
    );
  }
}

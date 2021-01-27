import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackCounter = stateName => {
    const prevState = this.state[stateName];
    this.setState({ [stateName]: prevState + 1 });
  };

  countTotalFeedback = state => {
    const arrey = Object.values(state);
    return arrey.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = stateName => {
    return `${Math.round(
      (this.state[stateName] / this.countTotalFeedback(this.state)) * 100,
    )}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <button
          type="button"
          onClick={() => {
            this.handleFeedbackCounter('good');
          }}
          className="button"
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            this.handleFeedbackCounter('neutral');
          }}
          className="button"
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            this.handleFeedbackCounter('bad');
          }}
          className="button"
        >
          Bad
        </button>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>
          Total:
          {this.countTotalFeedback(this.state)}
        </p>
        <p>Positiv feedback: {this.countPositiveFeedbackPercentage('good')}</p>
      </>
    );
  }
}

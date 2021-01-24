import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      </>
    );
  }
}

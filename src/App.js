import React, { Component } from 'react';
// import Feedback from './components/feedback/feedback';
import FeedbackOptions from './components/feedback-options/feedback-options';
import Statistics from './components/statistics/statistic';
import Section from './components/section/section';
import Notification from './components/notification/notification';

export default class App extends Component {
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
    // const { good, neutral, bad } = this.state;
    // console.log(Object.keys(this.state));
    return (
      <>
        {/* <Feedback /> */}
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedbackCounter}
            />
          }
        />
        <Section
          title={'Statistics'}
          children={
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage('good')}
            />
          }
        />
      </>
    );
  }
}

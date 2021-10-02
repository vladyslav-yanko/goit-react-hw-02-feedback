import React, { Component } from 'react';
import FeedBackOptions from 'Components/FeedbackOptions/FeedbackOptions';
import Statistics from 'Components/Statistics/Statistics';
import Notification from 'Components/Notification/Notification';

import './App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <div className="section">
        <h2>Please leave Feedback</h2>
        <FeedBackOptions states={this.state} onFeedback={this.addFeedback} />
        <h2>Statistics</h2>
        <div>
          {total > 0 ? (
            <Statistics
              states={this.state}
              total={total}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </div>
    );
  }
}

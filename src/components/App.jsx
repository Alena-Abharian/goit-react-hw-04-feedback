import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = (e) => {
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.handleClickBtn} />
        </Section>

        <Section title='Statistics'>
          {this.countTotalFeedback() === 0 ? (
              <Notification message='There is no feedback' />
            ) :
            (<Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />)}
        </Section>

      </div>
    );
  }
}

export default App;

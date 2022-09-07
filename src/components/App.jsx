import React, { useState } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClickBtn = (e) => {
    const { name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

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
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={handleClickBtn} />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() === 0 ? (
            <Notification message='There is no feedback' />
          ) :
          (<Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />)}
      </Section>
    </div>
  );
};

export default App;

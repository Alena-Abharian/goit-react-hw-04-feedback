import React, { useState } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickBtn = (e) => {
    switch (e.target.name) {
      case 'good':
        setGood( prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
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
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />)}
      </Section>
    </div>
  );
};

export default App;

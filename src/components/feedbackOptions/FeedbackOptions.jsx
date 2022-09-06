import React from 'react';
import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.wrap}>
      {options.map(option => (
        <button key={option} onClick={onLeaveFeedback} name={option.toLowerCase()}>{option}</button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;

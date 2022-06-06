import React from "react";
import PropTypes from 'prop-types';
import f from './Feedback.module.css';

function FeedbackOptions({ onIncrement, options }) {
  return (
          <div>
      {options.map(option => (
        <button className={f.buttons} name={option} key={option} onClick = { onIncrement }>
          { option.toUpperCase()}
        </button>
      ))}
          </div>
  )
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onIncrement:PropTypes.func.isRequired,
};

export default FeedbackOptions;
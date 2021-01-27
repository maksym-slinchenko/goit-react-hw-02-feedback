import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(opt => (
        <button
          type="button"
          onClick={() => {
            onLeaveFeedback(opt);
          }}
          className="button"
          key={opt}
        >
          {opt}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

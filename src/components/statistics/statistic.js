import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../notification/notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>
            Total:
            {total}
          </p>
          <p>Positiv feedback: {positivePercentage}</p>
        </>
      ) : (
        <>
          <Notification message={'No feedback given'} />
        </>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

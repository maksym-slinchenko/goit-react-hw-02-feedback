import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

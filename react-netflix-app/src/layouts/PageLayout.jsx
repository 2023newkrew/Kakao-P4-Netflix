import React from 'react';
import PropTypes from 'prop-types';
import Header from '@components/Header';

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

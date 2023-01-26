import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkeletonLayout = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #808080;
`;

export default function Skeleton({ width, height }) {
  return <SkeletonLayout width={width} height={height} />;
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Skeleton.defaultProps = {
  width: '100%',
  height: '100%',
};

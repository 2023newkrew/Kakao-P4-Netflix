import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonLayout = styled.button`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.6vw;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 2vw;
    height: 2vw;
    fill: ${(props) => props.color || 'black'};
  }
`;

export default function Button({
  Icon,
  name,
  color,
  backgroundColor,
  onClick,
}) {
  return (
    <ButtonLayout
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <Icon color={color} />
      {name}
    </ButtonLayout>
  );
}

Button.propTypes = {
  Icon: PropTypes.element,
  name: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  Icon: null,
  name: null,
  color: 'black',
  backgroundColor: 'white',
  onClick: null,
};

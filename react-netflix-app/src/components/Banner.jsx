import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerLayout = styled.div`
  height: 56.25vw;
  padding: 0 60% 20% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  background: url(${(props) =>
      `${process.env.REACT_APP_IMAGE_BASE_URL}${props.backgroundUrl}`})
    no-repeat center/cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
`;

const Title = styled.div`
  font-size: 5vw;
`;

const Overview = styled.div`
  font-size: 1.4vw;
`;

export default function Banner({ backgroundUrl, title, overview }) {
  return (
    <BannerLayout backgroundUrl={backgroundUrl}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </BannerLayout>
  );
}

Banner.propTypes = {
  backgroundUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@components/Button';
import Skeleton from '@components/Skeleton';
import { ReactComponent as PlayIcon } from '@assets/play.svg';
import { ReactComponent as InfoIcon } from '@assets/info.svg';

const BannerLayout = styled.section`
  height: 56.25vw;
  padding: 0 60% 20% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  background: url(${(props) =>
        `${process.env.REACT_APP_IMAGE_BASE_URL}${props.backgroundUrl}`})
      no-repeat center/cover,
    linear-gradient(transparent, black 90%);
  background-blend-mode: overlay;
`;

const Title = styled.div`
  font-size: 5vw;
`;

const Overview = styled.div`
  font-size: 1.4vw;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export default function Banner({ backgroundUrl, title, overview }) {
  return backgroundUrl ? (
    <BannerLayout backgroundUrl={backgroundUrl}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
      <ButtonContainer>
        <Button Icon={PlayIcon} name="재생" />
        <Button
          Icon={InfoIcon}
          name="상세 정보"
          color="white"
          backgroundColor="rgba(128, 128, 128, 0.5)"
        />
      </ButtonContainer>
    </BannerLayout>
  ) : (
    <Skeleton height="56.25vw" />
  );
}

Banner.propTypes = {
  backgroundUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

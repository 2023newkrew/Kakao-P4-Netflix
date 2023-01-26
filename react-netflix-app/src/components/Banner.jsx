import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from '@components/Skeleton';
import SquareButton from '@components/button/SquareButton';
import InfoModal from '@components/modal/InfoModal';
import useModal from '@hooks/useModal';
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

export default function Banner({ movie }) {
  const { backdrop_path, title, overview } = movie;
  const [Modal, open, close] = useModal();

  return backdrop_path ? (
    <BannerLayout backgroundUrl={backdrop_path}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
      <ButtonContainer>
        <SquareButton Icon={PlayIcon} name="재생" />
        <SquareButton
          Icon={InfoIcon}
          name="상세 정보"
          color="white"
          backgroundColor="rgba(128, 128, 128, 0.5)"
          onClick={open}
        />
      </ButtonContainer>
      <Modal>
        <InfoModal close={close} movie={movie} />
      </Modal>
    </BannerLayout>
  ) : (
    <Skeleton height="56.25vw" />
  );
}

Banner.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from '@components/Skeleton';
import TMDBImage from '@components/TMDBImage';
import SquareButton from '@components/button/SquareButton';
import InfoModal from '@components/modal/InfoModal';
import useModal from '@hooks/useModal';
import { ReactComponent as PlayIcon } from '@assets/play.svg';
import { ReactComponent as InfoIcon } from '@assets/info.svg';

const BannerLayout = styled.section`
  position: relative;
  box-sizing: border-box;
  height: 56.25vw;
  padding: 0 60% 20% 4%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
`;

const Backdrop = styled(TMDBImage)`
  position: absolute;
  top: 0;
  left: 0;
  mask-image: linear-gradient(black, transparent);
  z-index: -1;
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

export default function Banner({ isLoading, movie }) {
  const { backdrop_path, title, overview } = movie;
  const [ModalContainer, openModal, closeModal] = useModal();

  if (isLoading) return <Skeleton height="56.25vw" />;

  return (
    <BannerLayout>
      <Backdrop type="backdrop" path={backdrop_path} alt={title} />
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
      <ButtonContainer>
        <SquareButton>
          <PlayIcon />
          재생
        </SquareButton>
        <SquareButton
          color="white"
          backgroundColor="rgba(128, 128, 128, 0.5)"
          onClick={openModal}
        >
          <InfoIcon />
          상세 정보
        </SquareButton>
      </ButtonContainer>
      <ModalContainer>
        <InfoModal close={closeModal} movie={movie} />
      </ModalContainer>
    </BannerLayout>
  );
}

Banner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

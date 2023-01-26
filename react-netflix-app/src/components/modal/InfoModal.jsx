import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CircleButton from '@components/button/CircleButton';
import { ReactComponent as CloseIcon } from '@assets/x.svg';

const ModalLayout = styled.div`
  position: relative;
  width: 80vw;
  border-radius: 6px;
  background-color: black;
`;

const CloseButton = styled(CircleButton)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Backdrop = styled.div`
  height: 45vw;
  background: url(${(props) =>
      `${process.env.REACT_APP_IMAGE_BASE_URL}${props.backgroundUrl}`})
    no-repeat center/cover;
`;

const InfoContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 3vw;
`;

const Overview = styled.div`
  font-size: 1.6vw;
`;

export default function InfoModal({ close, movie }) {
  const { backdrop_path, title, overview } = movie;

  return (
    <ModalLayout>
      <CloseButton
        Icon={CloseIcon}
        color="white"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        onClick={close}
      />
      <Backdrop backgroundUrl={backdrop_path} />
      <InfoContainer>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
      </InfoContainer>
    </ModalLayout>
  );
}

InfoModal.propTypes = {
  close: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

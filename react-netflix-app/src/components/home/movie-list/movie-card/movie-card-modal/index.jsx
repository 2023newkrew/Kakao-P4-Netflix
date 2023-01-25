/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */

import DownIconImg from '@assets/down-icon.svg';
import StartIconImg from '@assets/start-icon.svg';
import {
  GenresContainer,
  GenreText,
  ModalButtonContainer,
  ModalIconButton,
  ModalInfoContainer,
  MovieCardModalContainer,
  MovieCardModalContent,
  TitleContainer,
} from './styles';

const MovieCardModal = ({ isAppear, movie }) => {
  if (!isAppear) return null;

  const { title, genres } = movie || {};

  return (
    <MovieCardModalContainer isAppear={isAppear}>
      <MovieCardModalContent>
        <ModalButtonContainer>
          <ModalIconButton src={StartIconImg} />
          <ModalIconButton src={DownIconImg} />
        </ModalButtonContainer>
        <ModalInfoContainer>
          <TitleContainer>{title ?? ''}</TitleContainer>
          <GenresContainer>
            {genres?.map(({ name }) => <GenreText key={name}>{name}</GenreText>) ?? ''}
          </GenresContainer>
        </ModalInfoContainer>
      </MovieCardModalContent>
    </MovieCardModalContainer>
  );
};

export default MovieCardModal;

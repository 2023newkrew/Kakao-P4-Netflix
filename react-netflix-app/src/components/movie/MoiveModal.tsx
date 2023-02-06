import { COLORS } from '@/constants/colors.contant';
import { MovieDetailType, MovieType } from '@/models/movies.model';
import styled from 'styled-components';
import { Image } from '@components/common/Image';
import { Modal } from '@components/common/Modal';
import Youtube from 'react-youtube';
import iconClose from '@assets/icon-close.svg';
import { useSetRecoilState } from 'recoil';
import { isModalOpenState } from '@/recoil/modal.recoil';
import { Button } from '@components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

interface MovieModalProps {
  movie: MovieDetailType
}
export function MovieModal ({ movie }: MovieModalProps) {
  const { id, isYoutube, path } = movie;
  const navigate = useNavigate();
  const setIsOpen = useSetRecoilState(isModalOpenState);
  const handleDetailPage = useCallback(() => {
    navigate(`/movie/${id}`);
  }, [id]);
  return (
    <Modal>
      <Container>
        <CloseButton onClick={() => setIsOpen(false)}>
          <img src={iconClose}/>
        </CloseButton>
        {isYoutube ?
          <Youtube
            videoId={path}
          />
          :
          <Poster src={path} imageType='themoviedb'/>
        }
        <LinkButton onClick={handleDetailPage}>상세페이지 가기</LinkButton>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  position: relative;
  background: ${COLORS.blackTrans};
  max-width: 80vw;
`;
const Poster = styled(Image)`
  max-height: 80vh;
`;
const LinkButton = styled(Button)`
  position: absolute;
  top: -48px;
  left: 0px;
  height: 32px;
`;
const CloseButton = styled(Button)`
  position: absolute;
  width: 64px;
  height: 64px;
  background: none;
  top: -72px;
  right: 0;
`;
import { COLORS } from '@/constants/colors.contant';
import { MovieDetailType, MovieType } from '@/models/movies.model';
import styled from 'styled-components';
import { Image } from '../common/Image';
import { Modal } from '../common/Modal';
import Youtube from 'react-youtube';

interface MovieModalProps {
  movie: MovieDetailType
}
export function MovieModal ({ movie }: MovieModalProps) {
  const { isYoutube, path } = movie;
  console.log(path);
  return (
    <Modal>
      <Container>
        {isYoutube ?
          <Youtube
            videoId={path}
          />
          :
          <Poster src={path} imageType='themoviedb'/>
        }
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  background: ${COLORS.blackTrans};
  max-width: 80vw;
  overflow: auto;
`;
const Poster = styled(Image)`
  max-height: 80vh;
`;
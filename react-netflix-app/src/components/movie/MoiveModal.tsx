import { COLORS } from '@/constants/colors.contant';
import { MovieType } from '@/models/movies.model';
import styled from 'styled-components';
import { Modal } from '../common/Modal';
import { Text } from '../common/Text';

interface MovieModalProps {
  movie: MovieType
}
export function MovieModal ({ movie }: MovieModalProps) {
  const { id, title } = movie;
  return (
    <Modal>
      <Container>
        <Text color={COLORS.black}>
          {id}  
        </Text>
        <Text color={COLORS.black}>
          {title}
        </Text>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  background: ${COLORS.white};
  max-height: 80vh;
  border-radius: 8px;
  padding: 24px;
`;
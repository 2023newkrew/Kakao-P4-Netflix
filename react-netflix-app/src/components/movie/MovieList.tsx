import { Image } from '@components/common/Image';
import List from '@components/common/List';
import { Text } from '@components/common/Text';
import { MovieType } from '@models/movies.model';
import styled from 'styled-components';


const MovieList = ({title, movies}: {title: string, movies: MovieType[]}) => {
  return (
    <Container>
      {movies.map((movie: MovieType) => {
        const { id, title, poster_path } = movie;
        return (
          <List.Card key={id}>
            <Poster src={poster_path} imageType={'themoviedb'}/>
            <Text>{title}</Text>
          </List.Card>
        );
      })}
    </Container>
  );
};

export default MovieList;

const Container = styled(List)`
  overflow-y: scroll;
`;
const Poster = styled(Image)`
  height: 360px;
  object-fit: contain;
  &:hover {
    transition: 0.5s transform;
    transform: scale(1.2);
    z-index: 999;
  }
`;


import { Image } from '@components/common/Image';
import List from '@components/common/List';
import { Text } from '@components/common/Text';
import { MovieType } from '@models/movies.model';
import styled from 'styled-components';


const MovieList = ({movies}: {movies: MovieType[]}) => {
  
  return (
    <List>
      {movies.map((movie: MovieType, index: number) => {
        const { title, poster_path } = movie;
        return (
          <List.Card key={index}>
            <Poster src={poster_path} imageType={'themoviedb'}/>
            <Text>{title}</Text>
          </List.Card>
        );
      })}
    </List>
  );
};

export default MovieList;

const Poster = styled(Image)`
  height: 360px;
  object-fit: contain;
`;


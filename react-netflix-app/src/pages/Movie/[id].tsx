import { Image } from '@/components/common/Image';
import { Text } from '@/components/common/Text';
import { FONT_SIZE } from '@/constants/typography.constant';
import { useFetchMovie } from '@/hooks/useFetchMovie';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Movie() {
  const { id } = useParams();
  const [ movie, isError, isLoading] = useFetchMovie(Number(id));
  
  if (isError) return <Text>Error</Text>;
  if (isLoading || !movie) return <Text>Loading</Text>;

  return (
    <>
      <MoviePoster src={movie.backdrop_path} imageType="themoviedb" isOriginal={true}/>
      <MovieInfo>
        <Text fontSize={FONT_SIZE.l}>{movie.title}</Text>
        <Text fontSize={FONT_SIZE.s}>({movie.vote_count})</Text>
      </MovieInfo>
    </>
  );
}
const MoviePoster = styled(Image)`
  width: 100%;
`;
const MovieInfo = styled.section`
  padding: 24px;
`;
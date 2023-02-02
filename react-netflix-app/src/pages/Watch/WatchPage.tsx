import { PageContainer } from '@styles/common';
import { useParams } from 'react-router-dom';

const WatchMoviePage = () => {
  const params = useParams();
  const movieId = params.movieId;
  return <PageContainer>Watch, {movieId}</PageContainer>;
};
export default WatchMoviePage;

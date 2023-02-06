import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';
import { COLORS } from '@constants/colors.contant';
import { FONT_SIZE, FONT_WEIGHT } from '@constants/typography.constant';
import { MovieType } from '@models/movies.model';
import { memo } from 'react';
import styled from 'styled-components';

const MoviePoster = ({movie}: {movie: MovieType}) => {
  const { title, overview, backdrop_path, } = movie;

  return (
    <Container>
      <MovieImage alt='메인 랜딩 이미지' isOriginal={true} imageType={'themoviedb'} src={backdrop_path}/>
      <MovieDescription>
        <Text fontSize={FONT_SIZE.xl} fontWeight={FONT_WEIGHT.bold}>{title}</Text>
        <Text fontSize={FONT_SIZE.m}>{overview}</Text>
      </MovieDescription>
    </Container>
  );
};
export default memo(MoviePoster);

const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 56.25vw;
  overflow: hidden;
  border-bottom: 8px solid ${COLORS.gray700};
`;

const MovieImage = styled(Image)`
  position: absolute;
  width: 100vw;
  height: 56.25vw;
`;

const MovieDescription = styled.article`
  position: absolute;
  top: calc(60px + 10%);
  left: 56px;
  translate: transformY(-50%);
  max-width: 30%;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;
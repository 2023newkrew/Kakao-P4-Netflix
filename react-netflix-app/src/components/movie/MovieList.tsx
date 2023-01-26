import { Image } from '@components/common/Image';
import { List, ListCard } from '@components/common/List';
import { Text } from '@components/common/Text';
import { FONT_SIZE } from '@constants/typography.constant';
// import { usePrevState } from '@hooks/usePrevState';
import { MovieType } from '@models/movies.model';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowSVG } from '@assets/icon-arrow.svg';
import { COLORS } from '@constants/colors.contant';
import { TOTAL_SHOWN } from '@constants/movies.constant';

interface MovieListProps {
  title: string,
  page: number,
  handlePrevPage: () => void,
  handleNextPage: () => void,
  movies: MovieType[],
}
const ELEMENT_WIDTH = 360;
const ELEMENT_HEIGHT = 540;
const MovieList = ({title, movies, page, handlePrevPage, handleNextPage}: MovieListProps) => {
  // const prevPage = usePrevState<number>(page);
  const wrapperRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    if (!wrapperRef || !wrapperRef.current) return;
    wrapperRef.current.style.setProperty('transform', `translateX(-${ELEMENT_WIDTH * (page - 1)}px`);
  }, [page]);

  return (
    <Container>
      <Title fontSize={FONT_SIZE.m}>{title}</Title>
      <Wrapper ref={wrapperRef}>
        {movies.map((movie: MovieType) => {
          const { id, title, poster_path } = movie;
          return (
            <ListCard key={id}>
              <Poster src={poster_path} imageType={'themoviedb'}/>
              <Text color={COLORS.gray300} textAlign='center'>{title}</Text>
            </ListCard>
          );
        })}
      </Wrapper>
      {page !== 1 && <PrevArrow onClick={handlePrevPage}/>}
      {page !== movies.length - TOTAL_SHOWN + 1 && <NextArrow onClick={handleNextPage}/>}
    </Container>
  );
};

export default MovieList;

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 6px solid ${COLORS.gray700};
`;
const Title = styled(Text)`
  margin: 16px 56px;
`;
const Wrapper = styled(List)`
  transition: 0.5s transform;
`;
const Poster = styled(Image)`
  width: ${ELEMENT_WIDTH}px;
  height: ${ELEMENT_HEIGHT}px;
  object-fit: cover;
  &:hover {
    transition: 0.5s transform;
    transform: scale(1.1);
    z-index: 999;
  }
`;
const NextArrow = styled(ArrowSVG)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const PrevArrow = styled(NextArrow)`
  transform: translateY(-50%) rotate(180deg);
  left: 40px;
`;
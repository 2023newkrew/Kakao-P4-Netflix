import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import MovieCard from '@pages/Main/components/MovieCard';

const SliderControlButton = styled.button`
  ${tw`absolute bg-[hsla(0,0%, 8%, .5)] rounded-b-md bottom-0 text-white flex justify-center items-center top-10 w-[4%] z-[20]`}
  &:nth-of-type(1) {
    left: 0;
  }
  &:nth-of-type(2) {
    right: 0;
  }
`;
const ListContainer = tw.div`flex leading-[1.4]`;
const SliderContent = tw.div`overflow-x-auto whitespace-nowrap w-full px-[4%]`;

const MovieCarousel = ({ movies }) => {
  return (
    <ListContainer>
      <SliderControlButton>이전</SliderControlButton>
      <SliderContent>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SliderContent>
      <SliderControlButton>다음</SliderControlButton>
    </ListContainer>
  );
};
MovieCarousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
export default MovieCarousel;

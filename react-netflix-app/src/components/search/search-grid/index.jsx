import PropTypes from 'prop-types';
import SearchGridItem from './search-grid-item';
import { SearchGridContainer, SearchGridContent, SearchGridInner } from './styles';

const SearchGrid = ({ movieList }) => {
  /* TODO: Add loading state */
  if (movieList.length === 0) return <h1>No Result Found.</h1>;

  return (
    <SearchGridContainer>
      <SearchGridContent>
        <SearchGridInner>
          {movieList.map((movie) => (
            <SearchGridItem key={movie.id} movie={movie} />
          ))}
        </SearchGridInner>
      </SearchGridContent>
    </SearchGridContainer>
  );
};

SearchGrid.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchGrid;

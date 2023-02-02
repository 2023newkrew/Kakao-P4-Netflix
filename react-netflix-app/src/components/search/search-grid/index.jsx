import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const SearchGrid = ({ movieList }) => <div>Hello</div>;

SearchGrid.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object),
};

SearchGrid.defaultProps = {
  movieList: [],
};

export default SearchGrid;

import PropTypes from 'prop-types';
import { TotalResultsContainer, TotalResultsTitle } from './styles';

const TotalResults = ({ totalResults }) => {
  if (totalResults === null) return null;

  return (
    <TotalResultsContainer>
      <TotalResultsTitle>{totalResults} result(s) found.</TotalResultsTitle>
    </TotalResultsContainer>
  );
};

TotalResults.propTypes = {
  totalResults: PropTypes.number,
};

TotalResults.defaultProps = {
  totalResults: null,
};

export default TotalResults;

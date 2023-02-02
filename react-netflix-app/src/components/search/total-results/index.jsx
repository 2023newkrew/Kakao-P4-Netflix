import PropTypes from 'prop-types';
import { TotalResultsContainer, TotalResultsTitle } from './styles';

const TotalResults = ({ totalResults }) => (
  <TotalResultsContainer>
    <TotalResultsTitle>
      {{
        null: '영화를 검색해주세요.',
        0: '검색 결과가 없습니다.',
      }[totalResults] || `${totalResults}개의 영화가 검색되었습니다.`}
    </TotalResultsTitle>
  </TotalResultsContainer>
);

TotalResults.propTypes = {
  totalResults: PropTypes.number,
};

TotalResults.defaultProps = {
  totalResults: null,
};

export default TotalResults;

import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL_MAP } from '@/configs/image';
import { SearchGridItemContainer, SearchGridItemImage, SearchGridItemTitle } from './styles';

const SearchGridItem = ({ movie }) => {
  const { poster_path: posterPath, title } = movie || {};

  const handleClick = useCallback(() => {}, []);

  return (
    <SearchGridItemContainer hasPosterImage={!!posterPath} onClick={handleClick}>
      {posterPath ? (
        <SearchGridItemImage src={`${IMAGE_URL_MAP.W_300}${posterPath}`} alt={title} />
      ) : (
        <SearchGridItemTitle>{title}</SearchGridItemTitle>
      )}
    </SearchGridItemContainer>
  );
};

SearchGridItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SearchGridItem;

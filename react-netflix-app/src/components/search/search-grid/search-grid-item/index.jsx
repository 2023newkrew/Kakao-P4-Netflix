import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL_MAP } from '@/configs/image';
import { SearchGridItemContainer, SearchGridItemImage, SearchGridItemTitle } from './styles';
import MovieModal from '@/components/modal/movie-modal';
import { getMovieDetail } from '@/apis/movie';

const SearchGridItem = ({ movie }) => {
  const { poster_path: posterPath, title, id } = movie || {};

  const [isShowModal, setIsShowModal] = useState(false);
  const [detailedMovie, setDetailedMovie] = useState(null);

  const onClick = useCallback(async () => {
    if (detailedMovie === null) {
      setDetailedMovie(await getMovieDetail(id));
    }

    setIsShowModal(true);
  }, [detailedMovie, id]);

  const onClose = useCallback(() => setIsShowModal(false), []);

  return (
    <>
      <SearchGridItemContainer hasPosterImage={!!posterPath} onClick={onClick}>
        {posterPath ? (
          <SearchGridItemImage src={`${IMAGE_URL_MAP.W_300}${posterPath}`} alt={title} />
        ) : (
          <SearchGridItemTitle>{title}</SearchGridItemTitle>
        )}
      </SearchGridItemContainer>
      {isShowModal && <MovieModal onClose={onClose} movie={detailedMovie} />}
    </>
  );
};

SearchGridItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SearchGridItem;

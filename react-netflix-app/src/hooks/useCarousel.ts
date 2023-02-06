import { START_PAGE } from '@constants/movies.constant';
import { throttle } from '@utils/throttle';
import { useCallback, useState } from 'react';

interface useCarouselProps {
  totalElements: number;
  totalVisibleElements: number
  isInfinity?: boolean;
  throttleDelay?: number
}
function useCarousel({
  totalElements,
  totalVisibleElements,
  isInfinity = false,
  throttleDelay = 1000
}: useCarouselProps) {
  const [page, setPage] = useState(START_PAGE);
  const lastPage = totalElements - totalVisibleElements + START_PAGE;

  const handlePrevPage = useCallback(
    throttle(() => {
      if (page > START_PAGE) {
        setPage(page - 1);
        return;
      } 
      if (isInfinity) {
        setPage(lastPage);
      }
    }, throttleDelay),
    [page, lastPage, isInfinity, throttleDelay]
  );
  
  const handleNextPage = useCallback(
    throttle(() => {
      if (page < lastPage) {
        setPage(page + 1);
        return;
      } 
      if (isInfinity) {
        setPage(0);
      }
    }, throttleDelay),
    [page, lastPage, isInfinity, throttleDelay]
  );

  return ({
    page,
    handlePrevPage,
    handleNextPage,
  });
}

export default useCarousel;
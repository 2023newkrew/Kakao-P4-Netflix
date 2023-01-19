import { throttle } from '@utils/throttle';
import { useCallback, useEffect, useState } from 'react';

const START_PAGE = 1;
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
  const [currentPage, setCurrentPage] = useState(START_PAGE);
  const lastPage = totalElements - totalVisibleElements;

  const handlePrevPage = useCallback(
    throttle(() => {
      if (currentPage > START_PAGE) {
        setCurrentPage(currentPage - 1);
        return;
      } 
      if (isInfinity) {
        setCurrentPage(lastPage);
      }
    }, throttleDelay),
    [currentPage, lastPage, isInfinity, throttleDelay]
  );
  
  const handleNextPage = useCallback(
    throttle(() => {
      if (currentPage < lastPage) {
        setCurrentPage(currentPage + 1);
        return;
      } 
      if (isInfinity) {
        setCurrentPage(0);
      }
    }, throttleDelay),
    [currentPage, lastPage, isInfinity, throttleDelay]
  );

  return ({
    currentPage,
    handlePrevPage,
    handleNextPage,
  });
}

export default useCarousel;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useFocus = (ref, pages) => {
  const location = useLocation();

  useEffect(() => {
    if (!ref.current) return;

    if (!pages.includes(location.pathname)) return;

    ref.current.focus();
  }, [...pages, ref]);
};

export default useFocus;

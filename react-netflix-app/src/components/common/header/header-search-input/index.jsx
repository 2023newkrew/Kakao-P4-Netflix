import { useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import { SearchInput } from './styles';
import { SEARCH_URL_PARAM } from '@/constants/param';
import useFocus from '@/hooks/use-focus';

const HeaderSearchInput = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.value = new URLSearchParams(window.location.search).get(SEARCH_URL_PARAM);
  }, []);

  useFocus(inputRef, [ROUTE_PATH[ROUTE.SEARCH]]);

  const onChange = useCallback(
    (event) => {
      const { value } = event?.target || { value: '' };
      const trimmedValue = value.trim();

      if (trimmedValue === '') return;

      navigate(`${ROUTE_PATH[ROUTE.SEARCH]}?${SEARCH_URL_PARAM}=${trimmedValue}`, {
        replace: true,
      });
    },
    [navigate],
  );

  return <SearchInput ref={inputRef} type="text" placeholder="Search" onChange={onChange} />;
};

export default HeaderSearchInput;

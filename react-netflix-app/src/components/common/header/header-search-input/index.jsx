import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import { SearchInput } from './styles';
import { SEARCH_URL_PARAM } from '@/constants/param';

const HeaderSearchInput = () => {
  const navigate = useNavigate();

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

  return <SearchInput type="text" placeholder="Search" onChange={onChange} />;
};

export default HeaderSearchInput;

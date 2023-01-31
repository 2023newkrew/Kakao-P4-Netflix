import styled from '@emotion/styled';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
// import useQueryParams from '@/hooks/use-query-params';

export const SearchInput = styled.input`
  height: 100%;
  max-height: 32px;
  color: var(--primary-text-color);
  background-color: var(--card-background-color);
  border: 1px solid var(--divider-color);
  border-radius: 4px;
`;

const HeaderSearchInput = () => {
  const [_, setSearchParams] = useSearchParams();

  const onChange = useCallback(
    (event) => {
      const { value } = event?.target || {};
      setSearchParams({ q: value }, { replace: true });
    },
    [setSearchParams],
  );

  return <SearchInput type="text" placeholder="Search" onChange={onChange} />;
};

export default HeaderSearchInput;

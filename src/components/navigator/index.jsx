import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSearchParam from '../../hooks/useSearchParam';

const StyledDiv = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 1rem var(--lr-padding);
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
  transition: background-color 0.2s;
  z-index: 2;
  ${({ isTop }) => (isTop ? '' : 'background-color: black;')}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;

const SearchBox = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  font-size: 0.75rem;
  line-height: 0.75rem;
  padding: 0.25rem 0.5rem;
  width: 10rem;
  outline: none;
  transition: 0.2s transform;
  border: 1px solid #181818;
  border-radius: 4px;

  &:focus {
    transform: scale(1.2);
    border: 1px solid red;
  }
`;

const rootElement = document.body.querySelector('#root');

function Navigator() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(!window.scrollY);
  const query = useSearchParam('query') ?? '';

  const handleChangeSearchInput = (event) => {
    const { value } = event.target;

    if (value) {
      navigate(`/search?query=${encodeURIComponent(value)}`, {
        replace: location.pathname === '/search',
      });
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(!rootElement.scrollTop);
    };

    rootElement.addEventListener('scroll', handleScroll);
    return () => {
      rootElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledDiv isTop={isTop}>
      <StyledLink to="/">넷플릭스™️</StyledLink>
      <SearchBox>
        <SearchInput
          type="text"
          placeholder="검색"
          value={query}
          onChange={handleChangeSearchInput}
        />
      </SearchBox>
    </StyledDiv>
  );
}

export default Navigator;

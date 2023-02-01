import styled from '@emotion/styled';

export const SearchGridContainer = styled.div`
  width: 100%;
`;

export const SearchGridContent = styled.div`
  margin: 0 auto;
  padding: 0 32px;
`;

export const SearchGridInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
`;

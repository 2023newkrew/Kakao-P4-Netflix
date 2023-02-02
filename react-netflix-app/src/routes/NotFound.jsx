import React from 'react';
import styled from 'styled-components';

const NotFoundLayout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2em;
`;

export default function NotFound() {
  return <NotFoundLayout>해당 페이지를 찾을 수 없습니다.</NotFoundLayout>;
}

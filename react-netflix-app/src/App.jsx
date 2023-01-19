import React from 'react';
import Header from '@components/Header';
import Main from '@routes/Main';

const menus = [
  { id: 1, name: '홈' },
  { id: 2, name: '시리즈' },
  { id: 3, name: '영화' },
  { id: 4, name: 'NEW! 요즘 대세 콘텐츠' },
  { id: 5, name: '내가 찜한 콘텐츠' },
  { id: 6, name: '언어별로 찾아보기' },
];

export default function App() {
  return (
    <>
      <Header menus={menus} />
      <Main />
    </>
  );
}

import React from 'react';
import Header from '@components/Header';
import Main from '@routes/Main';

const menus = [
  { path: '/hot', name: '홈' },
  { path: '/series', name: '시리즈' },
  { path: '/movie', name: '영화' },
  { path: '/latest', name: 'NEW! 요즘 대세 콘텐츠' },
  { path: '/my-list', name: '내가 찜한 콘텐츠' },
  { path: '/by-language', name: '언어별로 찾아보기' },
];

export default function App() {
  return (
    <>
      <Header menus={menus} />
      <Main />
    </>
  );
}

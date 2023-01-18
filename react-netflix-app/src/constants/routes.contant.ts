import Main from '@pages/index';
import { RoutesObject } from '@models/route.model';
import Notfound from '@pages/Notfound';
import Movie from '@pages/Movie/[id]';

const routes: RoutesObject = {
  '/': {
    name: '메인페이지',
    element: Main,
  },
  '/movie/:id': {
    name: '영화 상세페이지',
    element: Movie,
  },
  '/notfound': {
    name: '404 - 찾을 수 없는 페이지',
    element: Notfound,
  }
}; 

export { routes };
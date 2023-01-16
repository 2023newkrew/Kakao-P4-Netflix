import Main from '@pages/index';
import { RoutesObject } from '@models/route.model';
import Notfound from '@pages/Notfound';
import Movie from '@pages/Movie/[id]';

export const routes: RoutesObject = {
  '/': {
    name: '메인 페이지',
    element: Main,
  },
  '/movie/:id': {
    name: 'Movie Detail Pages',
    element: Movie,
  },
  '/notfound': {
    name: 'Not found - 404',
    element: Notfound,
  }
}; 
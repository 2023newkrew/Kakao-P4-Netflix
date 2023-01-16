import Main from '../pages/Main';
import { RoutesObject } from '../models/route.model';

export const routes: RoutesObject = {
  '/': {
    name: '메인',
    element: Main,
  }
}; 
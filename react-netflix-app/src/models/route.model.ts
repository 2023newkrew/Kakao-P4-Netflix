import { ReactElement } from 'react';

export type Route = {
    name: string,
    element: () => ReactElement
};
export type RoutesObject = {
    [path: string]: Route
};
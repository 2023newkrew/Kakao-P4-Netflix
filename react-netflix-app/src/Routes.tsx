import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import { routes } from '@constants/routes.contant';
import { Route as RouteType } from '@models/route.model';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      {
        Object
          .entries(routes)
          .map(([key, route]: [string, RouteType]) => 
            <Route
              key={key}
              path={key}
              element={<route.element/>}
            />
          )
      }
      <Route path="*" element={<Navigate replace to="/notfound" />} />
    </ReactRouterRoutes>
  );
}
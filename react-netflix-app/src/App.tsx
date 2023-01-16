import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';
import { routes } from '@constants/route.contant';
import { Route as RouteType } from '@models/route.model';

export default function Routes() {
  return (
    <ReactRoutes>
      {
        Object
          .entries(routes)
          .map(([key, route]: [string, RouteType]) => 
            <Route
              path={key}
              element={<route.element/>}
              key={key}
            />
          )
      }
      <Route path="*" element={<Navigate replace to="/notfound" />} />
    </ReactRoutes>
  );
}
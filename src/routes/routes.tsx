import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { NOTFOUNDPATH, SLASHPATH, UNAUTHORIZEDPATH } from "../constants/routes-constant";
import { routingData } from "./routes-data";
import { AppLoader } from "../components/feedback/app-loader/app-loader";
import { LOCALSTORAGEAUTHUSERINFO } from "../constants/browser-storage-constant";
import { getDataFromLocalStorage } from "../utils/browser-storage-utils";

const Notfound = lazy(() => import("../pages/common/not-found"));
const Unauthorized = lazy(() => import("../pages/common/un-authorized"));

const Routing: React.FC<any> = () => {
  const isAuth = getDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
  return (
    <>
      <Suspense
        fallback={<AppLoader message="Please Wait!" />}
        // fallback={null}
      >
        <Routes>
          {routingData.map((routing) => (
            <Route
              key={routing.id}
              element={
                <routing.guard allowedRoles={routing.allowedRoles}>
                  {" "}
                  <routing.layout />{" "}
                </routing.guard>
              }>
              {!!routing.parentRoutes &&
                routing.parentRoutes.map((parentRoute: any) => (
                  <Route
                    key={parentRoute.id}
                    path={parentRoute.pathLink}
                    index={parentRoute.index}
                    element={
                      <parentRoute.guard allowedRoles={parentRoute.allowedRoles}>
                        {parentRoute.componentName}{" "}
                      </parentRoute.guard>
                    }>
                    {!!parentRoute.child &&
                      parentRoute.child?.map((childRoute: any) => (
                        <Route
                          key={childRoute.id}
                          path={childRoute.pathLink}
                          index={childRoute.index}
                          element={
                            <childRoute.guard allowedRoles={childRoute.allowedRoles}>
                              {childRoute.componentName}
                            </childRoute.guard>
                          }
                        />
                      ))}
                  </Route>
                ))}
            </Route>
          ))}
          <Route
            path={SLASHPATH}
            element={<Navigate to={!!isAuth?.token ? "/dashboard" : "/home"} />}
          />
          <Route path={UNAUTHORIZEDPATH} element={<Unauthorized />} />
          <Route path={NOTFOUNDPATH} element={<Notfound />} />
          <Route path="*" element={<Navigate to={NOTFOUNDPATH} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routing;

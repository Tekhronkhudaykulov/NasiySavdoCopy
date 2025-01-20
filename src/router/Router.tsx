import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";
import "react-lazy-load-image-component/src/effects/opacity.css";
import PrivateRoute from "./PrivateRoute";
import { initApp } from "../helpers/api";
import Loader from "../components/PageLoader/Loader";
import { ErrorProvider } from "../context/ErrorContext";
import { ValueProvider } from "../context/ValueContext";
import { FormProvider } from "../context/FormContext";

const Router = () => {
  initApp();

  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <ErrorProvider>
          <ValueProvider>
          <FormProvider>
          <Routes>
          {_routes?.map(({ path, element: Component, childs }, idx) =>
            childs && childs?.length > 0 ? (
              <Route
                key={idx}
                path={path}
                element={<PrivateRoute child={<Component />} />}
              >
                {childs?.map(({ path, element: Component }, c) => (
                  <Route key={c} path={path} element={<Component />} />
                ))}
              </Route>
            ) : (
              <Route
                key={idx}
                path={path}
                element={<PrivateRoute child={<Component />} />}
              />
            ),
          )}
          <Route path="" />
        </Routes>
          </FormProvider>
          </ValueProvider>
 
        </ErrorProvider>
      </Suspense>
    </HashRouter>
  );
};

export default Router;

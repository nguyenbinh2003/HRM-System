import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react/jsx-runtime";

import "./App.css";
import PrivateRouter from "./routes/privateRoute/PrivateRoute";
import PublicRouter from "./routes/publicRoute/PublicRoute";
import { privateRoutes, publicRoutes } from "./routes/routes";
import DefaultLayout from "./layout/defaultLayout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route element={<PrivateRouter />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              let Layout: any = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                  path={route.path}
                />
              );
            })}
          </Route>
          <Route element={<PublicRouter />}>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout: any = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                  path={route.path}
                />
              );
            })}
          </Route>
        </Routes>
      </>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

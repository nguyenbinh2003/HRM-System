import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react/jsx-runtime";

import "./App.css";
import PrivateRouter from "./routes/privateRoute/PrivateRoute";
import PublicRouter from "./routes/publicRoute/PublicRoute";
import { privateRoutes, publicRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route element={<PrivateRouter />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              let Layout: any = Fragment;
              if (route.layout) {
                Layout = route.layout;
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
              return <Route key={index} element={<Page />} path={route.path} />;
            })}
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

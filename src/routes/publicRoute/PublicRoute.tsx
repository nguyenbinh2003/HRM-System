import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRouter = () => {
  const location = useLocation();
  const token = localStorage.getItem("user-token");

  if (!!token) {
    if (location.pathname === "/") {
      return <Navigate to="/employee" />;
    }
    return <Outlet />;
  } else {
    return <Outlet />;
  }
};

export default PublicRouter;

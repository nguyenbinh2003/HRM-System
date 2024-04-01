import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {
  const location = useLocation();
  const token = localStorage.getItem("user-token");

  if (!!token) {
    if (location.pathname === "/") {
      return <Navigate to="/employee" replace />;
    }
    return <Outlet />;
  } else {
    return <Navigate to="/auth/sign-in" replace />;
  }
};

export default PrivateRouter;

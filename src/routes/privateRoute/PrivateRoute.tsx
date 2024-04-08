import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/src/hooks/hooks";
import { clearUserStore } from "@/src/stores/userReducer";

const PrivateRouter = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const token = localStorage.getItem("user-token");

  if (!!token) {
    if (location.pathname === "/") {
      return <Navigate to="/employee" replace />;
    }
    return <Outlet />;
  } else {
    dispatch(clearUserStore({}));
    return <Navigate to="/auth/sign-in" replace />;
  }
};

export default PrivateRouter;

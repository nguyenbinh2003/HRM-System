import LoginPage from "@/src/pages/auth/login/LoginPage";
import ForgotPage from "@/src/pages/auth/forgot/ForgotPage";
import ErrorPage from "@/src/pages/error/ErrorPage";
import EmployeePage from "@/src/pages/employee/EmployeePage";
import Header from "@/src/layout/header/Header";
import ChangePasswordPage from "@/src/pages/auth/changePassword/ChangePasswordPage";

export const privateRoutes = [
  { path: "/employee", component: EmployeePage, layout: Header },
];
export const publicRoutes = [
  { path: "auth/sign-in", component: LoginPage, layout: null },
  { path: "auth/forgot-password", component: ForgotPage, layout: null },
  {
    path: "/auth/change-password",
    component: ChangePasswordPage,
    layout: null,
  },
  { path: "/error", component: ErrorPage, layout: null },
];

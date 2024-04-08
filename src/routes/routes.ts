import LoginPage from "@/src/pages/auth/login/LoginPage";
import ForgotPage from "@/src/pages/auth/forgot/ForgotPage";
import ErrorPage from "@/src/pages/error/ErrorPage";
import EmployeePage from "@/src/pages/employee/EmployeePage";
import ChangePasswordPage from "@/src/pages/auth/changePassword/ChangePasswordPage";
import DefaultLayout from "@/src/layout/defaultLayout/DefaultLayout";
import ResetPasswordPage from "@/src/pages/auth/resetPassword/ResetPasswordPage";

export const privateRoutes = [
  { path: "/", component: EmployeePage },
  { path: "/employee", component: EmployeePage, layout: DefaultLayout },
  {
    path: "/settings/change-password",
    component: ResetPasswordPage,
    layout: DefaultLayout,
  },
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

import LoginPage from "@/src/pages/auth/login/LoginPage";
import ForgotPage from "@/src/pages/auth/forgot/ForgotPage";
import ErrorPage from "@/src/pages/error/ErrorPage";
import EmployeePage from "@/src/pages/employee/EmployeePage";
import ResetPasswordPage from "@/src/pages/auth/resetPassword/ResetPasswordPage";
import DefaultLayout from "@/src/layout/defaultLayout/DefaultLayout";
import CreateOrUpdatePage from "@/src/pages/employee/createOrUpdate/CreateOrUpdatePage";

export const privateRoutes = [
  { path: "/", component: null },
  { path: "/employee", component: EmployeePage, layout: DefaultLayout },
  {
    path: "/settings/change-password",
    component: ResetPasswordPage,
    layout: DefaultLayout,
  },
  {
    path: "/employee/create-or-update",
    component: CreateOrUpdatePage,
    layout: DefaultLayout,
  },
  {
    path: "/employee/create-or-update/:idEmployee",
    component: CreateOrUpdatePage,
    layout: DefaultLayout,
  },
];

export const publicRoutes = [
  { path: "auth/sign-in", component: LoginPage, layout: null },
  { path: "auth/forgot-password", component: ForgotPage, layout: null },
  {
    path: "/auth/change-password",
    component: ResetPasswordPage,
    layout: null,
  },
  { path: "/error", component: ErrorPage, layout: null },
];

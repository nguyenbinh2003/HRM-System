import classNames from "classnames/bind";

import styles from "./ResetPassword.module.scss";
import ResetPasswordForm from "./resetPasswordForm/ResetPasswordForm";
import { Link } from "react-router-dom";
import { Box, Paper, Divider } from "@mui/material";

const cx = classNames.bind(styles);

export default function ChangePasswordPage() {
  return (
    <div
      className={cx("reset-password-page", "d-flex flex-column")}
      style={{ overflowY: "hidden" }}
    >
      <div className={cx("nav")}>
        <nav className={cx("header")} aria-label="breadcrumb">
          <ol className={cx("parent-item")}>
            <li className={cx("item")}>
              <Link to="/employee" style={{ pointerEvents: "none" }}>
                General
              </Link>
            </li>
            <li aria-hidden="true" className={cx("css-3mf706")}>
              ›
            </li>
            <li className={cx("item")}>
              <p className="">Settings</p>
            </li>
          </ol>
        </nav>
        <div className={cx("css-17jua")}>
          <h3>Settings</h3>
        </div>
      </div>
      <Paper
        elevation={0}
        sx={{
          borderRadius: "12px",
          maxWidth: "1170px",
          flex: "1 1 0%",
          margin: "30px 46px 0px",
          padding: "10px",
          "& .css-9mgopn-MuiDivider-root": {
            margin: "10px 0",
            backgroundColor: "rgba(193, 200, 205, 0.24)",
          },
        }}
      >
        <Box>
          <h4>Change Password</h4>
        </Box>
        <Divider />
        <Box
          sx={{
            maxWidth: "272px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <ResetPasswordForm />
        </Box>
      </Paper>
    </div>
  );
}

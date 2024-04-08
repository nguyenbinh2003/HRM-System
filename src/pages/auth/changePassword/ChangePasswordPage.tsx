import ChangePasswordForm from "./changePasswordForm/ChangePasswordForm";
import logo from "@/src/assets/logo.png";

export default function ChangePasswordPage() {
  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="mb-5">
        <img src={logo} alt="" />
      </div>
      <div
        style={{ marginTop: "0" }}
        className="d-flex align-items-center flex-column"
      >
        <h3 className="mb-4">Change Password</h3>
        <ChangePasswordForm />
      </div>
    </div>
  );
}

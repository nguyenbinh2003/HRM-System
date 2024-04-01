import ChangePasswordForm from "./changePasswordForm/ChangePasswordForm";
import logo from "@/src/assets/logo.png";

export default function ChangePasswordPage() {
  return (
    <div className="d-flex align-items-center flex-column" style={{}}>
      <div className="mb-4">
        <img src={logo} alt="" />
      </div>
      <div
        style={{ marginTop: "5%" }}
        className="d-flex align-items-center flex-column"
      >
        <h3 className="mb-4">Change Password</h3>
        <ChangePasswordForm />
      </div>
    </div>
  );
}

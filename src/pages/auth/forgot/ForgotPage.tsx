import logo from "@/src/assets/logo.png";
import ForgotForm from "./forgotForm/ForgotForm";

export default function ForgotPage() {
  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="mb-5">
        <img src={logo} alt="" />
      </div>
      <div
        style={{ marginTop: "0", width: "100%" }}
        className="d-flex align-items-center flex-column"
      >
        <h3 className="mb-4">Forgot Password</h3>
        <ForgotForm />
      </div>
    </div>
  );
}

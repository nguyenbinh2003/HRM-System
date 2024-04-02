import logo from "@/src/assets/logo.png";
import LoginForm from "./loginForm/LoginForm";

export default function LoginPage() {
  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="mb-4">
        <img src={logo} alt="" />
      </div>
      <div
        style={{ marginTop: "5%" }}
        className="d-flex align-items-center flex-column"
      >
        <h3 className="mb-4">Sign In</h3>
        <LoginForm />
      </div>
    </div>
  );
}

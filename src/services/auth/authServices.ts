import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";
class AuthService extends BaseServices {
  constructor() {
    super(URL, {});
  }
  login(data: object = {}) {
    return this.post("/login", data, {});
  }

  forgotPassword(data: object = {}) {
    return this.post("/forgot-password", data, {});
  }
}

export default AuthService;

import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class UserServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  getUserDetail() {
    return this.get("/user/detail", {});
  }

  userLogout() {
    return this.post("/logout", {});
  }
}

export default UserServices;

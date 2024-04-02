import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class UserServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  detail() {
    return this.get("/user/detail", {});
  }
}

export default UserServices;

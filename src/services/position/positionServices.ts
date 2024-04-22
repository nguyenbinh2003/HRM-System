import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class PositionServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  getPosition() {
    return this.get(`/position`, {});
  }
}

export default PositionServices;

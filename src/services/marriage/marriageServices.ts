import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class MarriageServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  getMarriage() {
    return this.get(`/marriage`, {});
  }
}

export default MarriageServices;

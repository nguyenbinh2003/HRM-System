import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class BenefitServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  getBenefit() {
    return this.get(`/benefit`, {});
  }
}

export default BenefitServices;

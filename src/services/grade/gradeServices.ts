import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class GradeServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  getGrade() {
    return this.get(`/grade`, {});
  }
}

export default GradeServices;

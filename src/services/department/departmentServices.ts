import BaseServices from "@/src/services/baseService";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class DepartmentServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  getDepartment() {
    return this.get(`/department`, {});
  }
}

export default DepartmentServices;

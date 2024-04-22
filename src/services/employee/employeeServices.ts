import BaseServices from "@/src/services/baseService";
import { GridRowId } from "@mui/x-data-grid";

const URL = "https://api-training.hrm.div4.pgtest.co/api/v1";

class EmployeeServices extends BaseServices {
  constructor() {
    super(URL, {});
  }
  getEmployee(page?: number, search?: string) {
    return this.get(
      `/employee?page=${page}&search=${search === "null" ? "" : search}`,
      {}
    );
  }

  getEmployeeDetail(id: number) {
    return this.get(`/employee/${id}`, {});
  }

  addNewEmployee(data: object) {
    return this.post("/employee", data);
  }

  updateEmployee(id: number, data: object) {
    return this.put(`/employee/${id}`, data); 
  }

  deleteEmployee(data: GridRowId[]) {
    return this.delete("/employee/multiple-delete", { record_ids: data });
  }
}

export default EmployeeServices;

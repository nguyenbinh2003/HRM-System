import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

import styles from "./EmployeePage.module.scss";
import { IconSearch } from "@/src/components/icons/icons";
import UserServices from "@/src/services/user/userServices";
import {
  configStyleDataGird,
  columnsDataGird,
} from "@/src/configs/configDataGird";
import CustomToolbar from "./customToolBar/CustomToolbar";
import CustomPagination from "./customPagination/CustomPagination";
import CustomNoRowsOverlay from "./customNoRowsOverlay/CustomNoRowsOverlay";

const cx = classNames.bind(styles);
const UserService = new UserServices();

export default function EmployeePage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsfocus] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const [employee, setEmployee] = useState({
    data: [],
    total: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  const handleGetEmployee = async (page?: number, search?: string) => {
    setIsLoading(true);
    const employee = await UserService.getEmployee(page, search);
    if (employee.data.data?.data) {
      const employeeObjs = employee.data.data?.data.map((data: any) => {
        return {
          id: data.staff_id || "",
          name: data.name || "",
          gender:
            data.gender === 0 ? "Male" : data.gender === 1 ? "Female" : "",
          marriage_code: data.marriage_code || "",
          mother_name: data.mother_name || "",
          nc_id: data.nc_id || "",
          contract_start_date: data.contract_start_date || "",
          department_name: data.department_name || "",
          position_name: data.position_name || "",
          ktp_no: data.ktp_no || "",
          mobile_no: data.mobile_no || "",
          tel_no: data.tel_no || "",
          entitle_ot:
            data.entitle_ot === 1 ? "Yes" : data.entitle_ot === 0 ? "No" : "",
          resign_reason: data.resign_reason ? "Yes" : "",
          grade_name: data.grade_name || "",
          old_staff_id: data.old_staff_id || "",
        };
      });

      setEmployee({
        data: employeeObjs,
        total: employee.data.data.total,
      });
    } else {
      setEmployee({
        data: [],
        total: 0,
      });
    }
    setIsLoading(false);
    return;
  };

  const handleOnChange = (e: any) => {
    setTimeout(() => {
      setValueSearch(e.target.value);
    }, 1000);
  };

  
  useEffect(() => {
    handleGetEmployee(paginationModel.page + 1, valueSearch);
  }, [paginationModel.page, valueSearch]);

  return (
    <div
      className={cx("employee-page", "d-flex flex-column")}
      style={{ overflowY: "hidden" }}
    >
      <div className={cx("css-u5ngd")}>
        <nav className={cx("header")} aria-label="breadcrumb">
          <ol className={cx("parent-item")}>
            <li className={cx("item")}>
              <Link to="/employee" style={{ pointerEvents: "none" }}>
                General
              </Link>
            </li>
            <li aria-hidden="true" className={cx("css-3mf706")}>
              ›
            </li>
            <li className={cx("item")}>
              <p className="">Employee Management</p>
            </li>
          </ol>
        </nav>
        <div className={cx("css-17jua99")}>
          <h3>Employee Management</h3>
          <div
            className={cx("input-group", "rounded", isFocus ? "focused" : "")}
          >
            <IconSearch width={25} height={25} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              onChange={(e) => handleOnChange(e)}
              onFocus={() => setIsfocus(true)}
              onBlur={() => setIsfocus(false)}
            />
          </div>
        </div>

        <Paper elevation={0} style={{ marginBottom: "10%" }}>
          <DataGrid
            style={{
              padding: "10px",
              border: 0,
              height: employee.data.length === 0 ? "680px" : "",
            }}
            pagination
            paginationMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            keepNonExistentRowsSelected
            slots={{
              toolbar: CustomToolbar,
              pagination: CustomPagination,
              noRowsOverlay: CustomNoRowsOverlay,
            }}
            rows={employee?.data || []}
            rowCount={employee?.total}
            columns={columnsDataGird}
            initialState={{}}
            pageSizeOptions={[5]}
            checkboxSelection
            rowHeight={40}
            columnHeaderHeight={45}
            density="compact"
            loading={isLoading}
            sx={configStyleDataGird}
          />
        </Paper>
      </div>
    </div>
  );
}

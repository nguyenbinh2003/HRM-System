import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DataGrid,
  GridEventListener,
  GridRowParams,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import styles from "./EmployeeHomePage.module.scss";
import { IconSearch } from "@/src/components/icons/icons";
import EmployeeServices from "@/src/services/employee/employeeServices";
import {
  configStyleDataGird,
  columnsDataGird,
} from "@/src/configs/configDataGird";
import CustomToolbar from "./customToolBar/CustomToolbar";
import CustomPagination from "./customPagination/CustomPagination";
import CustomNoRowsOverlay from "./customNoRowsOverlay/CustomNoRowsOverlay";
import ModalDelete from "./modalDelete/ModalDelete";

const cx = classNames.bind(styles);
const EmployeeService = new EmployeeServices();

export default function EmployeePage() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [params, setParams] = useSearchParams();
  const [isFocus, setIsfocus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [paginationModel, setPaginationModel] = useState({
    page: Number(params.get("page")) === null ? 0 : Number(params.get("page")),
    pageSize: 20,
  });
  const [employee, setEmployee] = useState({
    data: [],
    total: 0,
  });
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);

  const handleOpenModalDelete = () => setIsShowModalDelete(true);
  const handleCloseModalDelete = () => setIsShowModalDelete(false);

  const handleGetEmployee = async (page?: number, search?: string) => {
    setIsLoading(true);

    const employee = await EmployeeService.getEmployee(page, search);
    if (employee.data.data?.data) {
      const employeeObjs = employee.data.data?.data.map((data: any) => {
        return {
          id: data.id || "",
          staff_id: data.staff_id || "",
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

  const handleOnChangeValueSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setParams({ page: String(paginationModel.page), search: value });
      }, 1000);
    },
    []
  );

  const handleDoubleClickRow: GridEventListener<"rowDoubleClick"> = (
    params: GridRowParams
  ) => navigate(`/employee/create-or-update/${params.id}`);
  
  useEffect(() => {
    setParams({
      page: String(params.get("page") === null ? 1 : paginationModel.page + 1),
      search: String(params.get("search") || ""),
    });
    handleGetEmployee(paginationModel.page + 1, String(params.get("search")));
  }, [paginationModel.page, params.get("search")]);

  return (
    <>
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
                defaultValue={String(params.get("search") || "")}
                onChange={(e) => handleOnChangeValueSearch(e)}
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
              rowSelectionModel={rowSelectionModel}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                if (newRowSelectionModel.length === 0) {
                  setIsDisabled(true);
                } else {
                  setIsDisabled(false);
                }
                setRowSelectionModel(newRowSelectionModel);
              }}
              keepNonExistentRowsSelected
              slots={{
                toolbar: () => (
                  <CustomToolbar
                    isDisabled={isDisabled}
                    handleOnShow={handleOpenModalDelete}
                  />
                ),
                pagination: CustomPagination,
                noRowsOverlay: CustomNoRowsOverlay,
              }}
              rows={employee?.data || []}
              rowCount={employee?.total}
              onRowDoubleClick={handleDoubleClickRow}
              columns={columnsDataGird}
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
      <ModalDelete
        isShow={isShowModalDelete}
        rowSelectionModel={rowSelectionModel}
        setRowSelectionModel={setRowSelectionModel}
        setShow={setIsShowModalDelete}
        setIsDisabled={setIsDisabled}
        handleGetEmployee={handleGetEmployee}
        handleClose={handleCloseModalDelete}
      />
    </>
  );
}

import { GridColDef } from "@mui/x-data-grid";

export const configStyleDataGird = {
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "rgb(236, 238, 240)",
    border: "1px solid white",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "rgb(248 249 250)",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "rgb(237, 246, 255)",
  },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
  "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
    color: "rgb(48, 164, 108)",
  },
  "& ::-webkit-scrollbar": {
    width: "10px",
    height: "10px",
  },
  "& ::-webkit-scrollbar-track": {
    backgroundColor: "#f5f5f5",
  },
  "& ::-webkit-scrollbar-thumb": {
    borderRadius: "6px",
    boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
    backgroundColor: "#d7dbdf",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    lineHeight: "1.5rem",
    fontSize: "14px",
    fontFamily: `"SVN-Sofia Pro Regular", "Public Sans", sans-serif`,
    fontWeight: 600,
  },
  "& .MuiDataGrid-cell": {
    display: "flex",
    alignItems: "center",
    margin: 0,
    lineHeight: 1.5,
    fontSize: "12px",
    fontFamily: `"SVN-Sofia Pro Regular", "Public Sans", sans-serif`,
    fontWeight: 400,
    textTransform: "capitalize",
    border: "1px solid white",
    // background: "rgb(248 249 250)",
  },
  "& .MuiSvgIcon-fontSizeMedium": {
    fontSize: "1.25rem",
  },
  "& .MuiDataGrid-virtualScroller": {
    maxHeight: "525px",
    minHeight: "525px",
    scrollBehavior: "smooth",
  },
  "& .css-levciy-MuiTablePagination-displayedRows": {
    margin: "0",
  },
  "& .MuiButtonBase-root": {
    textTransform: "capitalize",
    margin: "0px",
    fontSize: "14px",
    fontFamily: `"SVN-Sofia Pro Regular", "Public Sans", sans-serif`,
    fontWeight: 400,
  },
  "& .MuiDivider-root": {
    margin: "10px 0px",
    border: "1px solid rgb(103 147 162)",
  },
  "& .MuiDataGrid-toolbarContainer": {
    justifyContent: "end",
  },
  "& .MuiDataGrid-footerContainer": {
    padding: "10px 0 0 0",
    justifyContent: "start",
  },
  "& .MuiToolbar-root": {
    flexDirection: "row-reverse",
    gap: "5px",
    padding: 0,
  },
  "& .MuiTablePagination-displayedRows": {
    padding: "8px 12px",
    backgroundColor: "rgb(241, 243, 245)",
    borderRadius: "6px",
  },
  "& .MuiButtonBase-root.MuiPaginationItem-root": {
    minWidth: "48px",
    height: "35px",
    borderRadius: "6px",
    margin: "0 3px",
  },
  "& .MuiTypography-h6": {
    margin: "30px 0px 0px",
    fontWeight: 400,
    lineHeight: 1.38889,
    fontSize: "18px",
    fontFamily: `"SVN-Sofia Pro Regular", "Public Sans", sans-serif`,
    textAlign: "center",
  },
  "& .MuiTypography-body1": {
    margin: "5px 0px 0px",
    lineHeight: 1.5,
    fontSize: "16px",
    letterSpacing: "-0.01em",
    fontFamily: `"SVN-Sofia Pro Regular", "Public Sans", sans-serif`,
    fontWeight: 400,
    textAlign: "center",
    color: "rgb(104, 112, 118)",
  },
  "& .MuiTablePagination-actions": {
    marginLeft: "0",
  },
};

export const columnsDataGird: GridColDef[] = [
  {
    field: "staff_id",
    headerName: "NIK",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "name",
    headerName: "Name",
    disableColumnMenu: true,
    width: 145,
    sortable: false,
    resizable: false,
  },
  {
    field: "gender",
    headerName: "Gender",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "marriage_code",
    headerName: "Marriage Status",
    width: 145,
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "mother_name",
    headerName: "Mother Name",
    width: 145,
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "nc_id",
    headerName: "Tax ID",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "contract_start_date",
    headerName: "Date Start",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "department_name",
    headerName: "Department",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "position_name",
    headerName: "Position",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "ktp_no",
    headerName: "KTP No.",
    disableColumnMenu: true,
    width: 145,
    sortable: false,
    resizable: false,
  },
  {
    field: "mobile_no",
    headerName: "Mobile No.",
    disableColumnMenu: true,
    width: 120,
    sortable: false,
    resizable: false,
  },
  {
    field: "tel_no",
    headerName: "Tel No.",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "entitle_ot",
    headerName: "Entitled OT",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "resign_reason",
    headerName: "Resigned",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "grade_name",
    headerName: "Grading",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
  {
    field: "old_staff_id",
    headerName: "Old NIK",
    disableColumnMenu: true,
    sortable: false,
    resizable: false,
  },
];

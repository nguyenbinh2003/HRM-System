import { GridPagination } from "@mui/x-data-grid";
import Pagination from "./pagination/Pagination";

export default function CustomPagination(props: any) {
  return (
    <>
      <GridPagination ActionsComponent={Pagination} {...props} />
    </>
  );
}

import { Button, Divider } from "@mui/material";
import { GridToolbarContainer, useGridApiRef } from "@mui/x-data-grid";
import { RxTrash } from "react-icons/rx";
import { CgFolderAdd } from "react-icons/cg";

export default function CustomToolbar() {
  const apiRef = useGridApiRef();
  console.log("🚀 ~ CustomToolbar ~ apiRef:", apiRef)

  return (
    <div>
      <GridToolbarContainer>
        <Button
          onClick={() => {}}
          startIcon={<CgFolderAdd size={15} />}
          sx={{ minWidth: "90px", backgroundColor: "rgb(237, 246, 255)" }}
        >
          Add
        </Button>
        <Button
          color="error"
          onClick={() => {}}
          startIcon={<RxTrash size={15} />}
          sx={{ minWidth: "90px", backgroundColor: "rgb(255, 239, 239)" }}
        >
          Delete
        </Button>
      </GridToolbarContainer>
      <Divider />
    </div>
  );
}

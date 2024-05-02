import { Button, Divider } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";
import { RxTrash } from "react-icons/rx";
import { CgFolderAdd } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function CustomToolbar({
  isDisabled,
  handleOnShow,
}: {
  isDisabled: boolean;
  handleOnShow: () => void;
}) {
  const navigate = useNavigate();
  return (
    <div>
      <GridToolbarContainer>
        <Button
          onClick={() => navigate("/employee/create-or-update")}
          startIcon={<CgFolderAdd size={15} />}
          sx={{ minWidth: "90px", backgroundColor: "rgb(237, 246, 255)" }}
        >
          Add
        </Button>
        <Button
          disabled={isDisabled}
          color="error"
          onClick={handleOnShow}
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

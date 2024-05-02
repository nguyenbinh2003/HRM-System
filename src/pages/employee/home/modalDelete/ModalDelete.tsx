import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { BiError } from "react-icons/bi";
import { MoonLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";

import EmployeeServices from "@/src/services/employee/employeeServices";
import checkCircle from "@/src/assets/check-circle.png";
import { useState } from "react";

const EmployeeService = new EmployeeServices();

export default function ModalDelete({
  isShow,
  rowSelectionModel,
  handleClose,
  setShow,
  handleGetEmployee,
}: {
  isShow: boolean;
  rowSelectionModel: GridRowId[];
  setShow: (val: boolean) => void;
  handleClose: () => void;
  handleGetEmployee: (page: number, search: string) => void;
}) {
  const [params, setParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = async (data: GridRowId[]) => {
    setIsLoading(true);
    const deleteEmployee = await EmployeeService.deleteEmployee(data);
    if (!!deleteEmployee) {
      setShow(false);
      handleGetEmployee(
        Number(params.get("page") || 1),
        String(params.get("search"))
      );
      toast.success("Success.", {
        icon: () => <img src={checkCircle} alt="" />,
        style: { background: "#D9F3EE", color: "#12A594", fontSize: "13px" },
        hideProgressBar: true,
      });
    } else {
      toast.error("Delete fail.", {
        icon: () => <BiError size={20} />,
        style: {
          background: "#FFEFEF",
          color: "#E5484D",
          fontSize: "13px",
        },
        hideProgressBar: true,
      });
    }
    setIsLoading(false);
    return;
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isShow}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isShow}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 355,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: "none",
            border: "0",
            p: 0,
            "& .css-1qga66m-MuiButtonBase-root-MuiButton-root:hover": {
              backgroundColor: "rgba(0, 145, 255, 0.08)",
              boxShadow: "none",
            },
            "& .css-65q1ed-MuiButtonBase-root-MuiButton-root:hover": {
              backgroundColor: "rgb(0, 129, 241)",
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "20px 16px 4px 24px",
            }}
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                margin: "0px",
                fontFamily: `"SVN-Sofia Pro Medium", "Public Sans", sans-serif`,
                fontWeight: 500,
                lineHeight: 1.375,
                fontSize: "24px",
                letterSpacing: "-0.03em",
              }}
            >
              Delete
            </Typography>
            <IconButton onClick={handleClose}>
              <AiOutlineClose size={20} />
            </IconButton>
          </Box>
          <Typography
            id="transition-modal-description"
            sx={{
              padding: "0px 24px",
              margin: "0px",
              lineHeight: 1.5,
              fontSize: "16px",
              letterSpacing: "-0.01em",
              fontFamily: `"SVN-Sofia Pro Regular", "Public Sans", sans-serif`,
              fontWeight: 400,
              color: "rgb(104, 112, 118)",
            }}
          >
            Are you sure you want to delete?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "0 0 auto",
              padding: "24px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: "48px",
                width: "100%",
                textTransform: "none",
                color: "rgb(17, 24, 28)",
                backgroundColor: "rgb(241, 243, 245)",
                boxShadow: "none",
              }}
              onClick={handleClose}
            >
              No
            </Button>
            <Button
              variant="contained"
              disabled={isLoading}
              sx={{
                height: "48px",
                width: "100%",
                marginLeft: "8px",
                textTransform: "none",
                backgroundColor: "rgb(0, 145, 255)",
                boxShadow: "none",
              }}
              onClick={() => handleDelete(rowSelectionModel)}
            >
              {isLoading ? <MoonLoader color="#FBFDFF" size={20} /> : "Yes"}
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown, MenuProps, Space } from "antd";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BiError } from "react-icons/bi";

import styles from "./Header.module.scss";
import logo from "@/src/assets/Rectangle 4.png";
import UserServices from "@/src/services/user/userServices";
import { addUserStore, clearUserStore } from "@/src/stores/userReducer";
import { useAppDispatch, useAppSelector } from "@/src/hooks/hooks";

const UserService = new UserServices();

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user);

  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  const handleSignOut = async () => {
    const logout = await UserService.userLogout();
    if (logout.status < 400) {
      localStorage.clear();
      navigate("/auth/sign-in");
    } else {
      toast.error("Sign out fail.", {
        icon: () => <BiError size={20} />,
        style: {
          background: "#FFEFEF",
          color: "#E5484D",
          fontSize: "13px",
        },
        hideProgressBar: true,
      });
    }
    return;
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="mb-2">
          <div
            className="d-flex flex-row align-items-center"
            style={{ width: "300px" }}
          >
            <img
              className="rounded-circle me-2"
              src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              alt="avatar.png"
              style={{ maxWidth: "40px" }}
            />
            <h4>{user.data?.username ? user.data.username : "admin_test1"}</h4>
          </div>
          <p
            className="d-flex justify-content-center rounded-pill mt-1"
            style={{
              background: "#e2def0",
              color: "#7e29c9",
              width: "55%",
              margin: 0,
            }}
          >
            Line Manager
          </p>
        </div>
      ),
      key: "0",
    },
    {
      label: <h6>Sew Department</h6>,
      key: "1",
    },
    {
      label: <h6>NIK : PGA0047</h6>,
      key: "2",
    },
    {
      label: (
        <div className="d-flex flex-column align-items-start gap-2">
          <Button
            variant="primary"
            style={{ width: "100%", height: "48px" }}
            onClick={handleShow}
          >
            Sign Out
          </Button>
          <Link to={"/settings/change-password"} className="mb-4">
            Reset Password
          </Link>
        </div>
      ),
      key: "3",
    },
  ];

  const handleGetUserDetail = async () => {
    const user = await UserService.getUserDetail();

    if (user.status < 400) {
      dispatch(addUserStore(user.data));
    }
  };

  useEffect(() => {
    handleGetUserDetail();
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary shadow "
      style={{ position: "sticky", zIndex: 1001, height: "auto", top: "0" }}
    >
      <div
        className="d-flex flex-row align-items-center"
        style={{ margin: "0 3%", width: "100%" }}
      >
        <Link className="navbar-brand d-flex align-items-center" to="/employee">
          <img
            src={logo}
            alt="logo.png"
            style={{ maxWidth: "40px" }}
            className="me-2"
          />
          <h4
            style={{
              fontWeight: "500",
              lineHeight: "1.375",
              fontSize: "24px",
              margin: "0",
            }}
          >
            HR Management Syste
          </h4>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <span>
                <Space>
                  <img
                    className="rounded-circle"
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="avatar.png"
                    style={{ maxWidth: "40px", cursor: "pointer" }}
                  />
                </Space>
              </span>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
        <Modal centered show={isShow} onHide={handleClose} size="sm">
          <Modal.Header closeButton style={{ border: "none" }}>
            <Modal.Title id="example-modal-sizes-title-sm">
              Do you wish to sign out?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer style={{ border: "none" }}>
            <div className="d-flex gap-2" style={{ width: "100%" }}>
              <Button
                variant="secondary"
                style={{
                  width: "50%",
                  height: "48px",
                }}
                onClick={handleClose}
              >
                No
              </Button>
              <Button
                variant="primary"
                style={{ width: "50%", height: "48px" }}
                onClick={() => {
                  handleClose();
                  handleSignOut();
                  dispatch(clearUserStore({}));
                }}
              >
                Yes
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </Navbar>
  );
}

export default Header;

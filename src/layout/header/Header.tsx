import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown, MenuProps, Space } from "antd";
import { useNavigate } from "react-router-dom";

import "./Header.css";
import logo from "@/src/assets/Rectangle 4.png";
import UserServices from "@/src/services/user/userServices";
import { useEffect, useState } from "react";
import { addUserStore } from "@/src/stores/userReducer";
import { useAppDispatch } from "@/src/hooks/hooks";

const UserService = new UserServices();

function Header() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/auth/sign-in");
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
              style={{ maxWidth: "40px", cursor: "pointer" }}
            />
            <h4>admin_test1</h4>
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
          <Link to={"/employee"} className="mb-4">
            Reset Password
          </Link>
        </div>
      ),
      key: "3",
    },
  ];
  // const dispatch = useAppDispatch();

  // const handleGetUserDetail = async () => {
  //   const user = await UserService.detail();
  //   console.log(user);

  //   dispatch(addUserStore(user.data));
  //   if (user.status < 400) {
  //   }
  // };

  // useEffect(() => {
  //   handleGetUserDetail();
  // }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow ">
      <div
        className="d-flex flex-row align-items-center"
        style={{ margin: "0 3%", width: "100%" }}
      >
        <Link className="navbar-brand" to="/employee">
          <img
            src={logo}
            alt="logo.png"
            style={{ maxWidth: "40px" }}
            className="me-2"
          />
          HR Management Syste
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img
                    className="rounded-circle"
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="avatar.png"
                    style={{ maxWidth: "40px", cursor: "pointer" }}
                  />
                </Space>
              </a>
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

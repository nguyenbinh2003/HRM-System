import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./SideBar.module.scss";
import { IconEmployee } from "@/src/components/icons/icons";

const cx = classNames.bind(styles);

export default function SideBar() {
  return (
    <div className={cx("side-bar", "mt-5")}>
      <div style={{ padding: "24px", paddingTop: "50px" }}>
        <nav>
          <h4>General</h4>

          <Link to={"/employee"} className={cx("link-employee")}>
            <div className={cx("icon-employee", "p-2")}>
              <IconEmployee width={20} height={20} />
            </div>

            <p style={{ margin: "0" }}>Employee Management</p>
          </Link>
        </nav>
      </div>
    </div>
  );
}

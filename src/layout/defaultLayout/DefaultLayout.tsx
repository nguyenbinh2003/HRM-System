import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Header />
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar />
        {children}
      </div>
    </>
  );
}

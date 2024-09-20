import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const DashBoardLayout = () => (
  <div className="dashboard_layout_container">
    <Navigation />
    <div className="outlet">
      <Outlet />
    </div>
  </div>
);

export default DashBoardLayout;

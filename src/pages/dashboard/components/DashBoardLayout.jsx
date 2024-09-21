import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { existing_user } from "../../utils";
import { useEffect } from "react";

const DashBoardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!existing_user) {
      navigate("/auth/login");
    }
  }, [navigate]);
  return (
    existing_user && (
      <div className="dashboard_layout_container">
        <Navigation />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    )
  );
};

export default DashBoardLayout;
